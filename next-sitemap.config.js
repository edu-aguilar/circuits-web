const fs = require("fs");
const path = require("path");

const slugifyLocation = (value) =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const readAppRoutes = (excluded = []) => {
  const manifestPath = path.join(__dirname, ".next", "app-path-routes-manifest.json");
  if (!fs.existsSync(manifestPath)) {
    return [];
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const routes = Object.values(manifest)
    .filter((route) => !route.includes("[") && !route.startsWith("/api"))
    .filter((route) => !excluded.includes(route));
  return routes;
};

const readModelSlugs = (blockName) => {
  const dataPath = path.join(__dirname, "src", "lib", "motos-data.ts");
  const file = fs.readFileSync(dataPath, "utf8");
  const blockStart = file.indexOf(`export const ${blockName}`);
  if (blockStart === -1) {
    return [];
  }
  const blockEnd = file.indexOf("];", blockStart);
  const block = file.slice(blockStart, blockEnd === -1 ? undefined : blockEnd);
  const slugs = [];
  const slugRegex = /slug:\s*"([^"]+)"/g;
  let match;
  while ((match = slugRegex.exec(block)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
};

const readRegionProvinceUrls = () => {
  const regionsPath = path.join(__dirname, "circuits-api.regions.json");
  const provincesPath = path.join(__dirname, "circuits-api.provinces.json");
  if (!fs.existsSync(regionsPath) || !fs.existsSync(provincesPath)) {
    return { regionUrls: [], provinceUrls: [] };
  }
  const regions = JSON.parse(fs.readFileSync(regionsPath, "utf8"));
  const provinces = JSON.parse(fs.readFileSync(provincesPath, "utf8"));
  const regionSlugById = new Map(
    regions.map((region) => [region._id.$oid, slugifyLocation(region.name)]),
  );
  const regionUrls = regions.map((region) => `/circuitos/${slugifyLocation(region.name)}`);
  const provinceUrls = provinces
    .map((province) => {
      const regionSlug = regionSlugById.get(province.regionId);
      if (!regionSlug) {
        return null;
      }
      return `/circuitos/${regionSlug}/${slugifyLocation(province.name)}`;
    })
    .filter(Boolean);

  return { regionUrls, provinceUrls };
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://todopitbike.es",
  generateRobotsTxt: true,
  exclude: ["/dashboard", "/_not-found"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  transform: async (config, pagePath) => {
    const isCircuit = pagePath.startsWith("/circuitos/");
    const isMotoModel = pagePath.startsWith("/motos/") && pagePath.split("/").length === 4;
    return {
      loc: pagePath,
      changefreq: isCircuit ? "daily" : "weekly",
      priority: pagePath === "/" ? 1 : isCircuit ? 0.7 : isMotoModel ? 0.6 : 0.5,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const excludedPaths = config.exclude ?? [];
    let circuits = { data: [] };
    try {
      const response = await fetch("https://circuits-api.onrender.com/circuits");
      circuits = await response.json();
    } catch (error) {
      circuits = { data: [] };
    }

    const staticRoutes = readAppRoutes(excludedPaths);
    const imrSlugs = readModelSlugs("imrModels");
    const malcorSlugs = readModelSlugs("malcorModels");
    const sharkSlugs = readModelSlugs("sharkModels");
    const { regionUrls, provinceUrls } = readRegionProvinceUrls();

    const circuitRoutes = circuits.data.map((circuit) => `/circuitos/pista/${circuit.nameUrl}`);
    const motoRoutes = [
      ...imrSlugs.map((slug) => `/motos/imr/${slug}`),
      ...malcorSlugs.map((slug) => `/motos/malcor/${slug}`),
      ...sharkSlugs.map((slug) => `/motos/shark/${slug}`),
    ];

    const allRoutes = Array.from(
      new Set([...staticRoutes, ...circuitRoutes, ...regionUrls, ...provinceUrls, ...motoRoutes]),
    );
    const entries = await Promise.all(allRoutes.map((route) => config.transform(config, route)));
    return entries.filter(Boolean);
  },
};

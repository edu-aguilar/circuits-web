const fs = require("fs");
const path = require("path");

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

    const circuitRoutes = circuits.data.map((circuit) => `/circuitos/${circuit.nameUrl}`);
    const motoRoutes = [
      ...imrSlugs.map((slug) => `/motos/imr/${slug}`),
      ...malcorSlugs.map((slug) => `/motos/malcor/${slug}`),
      ...sharkSlugs.map((slug) => `/motos/shark/${slug}`),
    ];

    const allRoutes = Array.from(new Set([...staticRoutes, ...circuitRoutes, ...motoRoutes]));
    const entries = await Promise.all(allRoutes.map((route) => config.transform(config, route)));
    return entries.filter(Boolean);
  },
};

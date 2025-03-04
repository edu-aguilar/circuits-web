/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://todopitbike.es",
  generateRobotsTxt: true,
  exclude: [],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  additionalPaths: async (config) => {
    const circuits = await fetch("https://circuits-api.onrender.com/circuits").then((res) => res.json());

    return circuits.data.map((circuit) => ({
      loc: `/circuitos/${circuit.nameUrl}`,
      changefreq: "daily",
      priority: 0.7,
    }));
  },
};

const BASE_URL = "https://todopitbike.es";

export const getUrl = (path: string) => `${BASE_URL}${path}`;

export const routes = {
  home: {
    path: "/",
    url: getUrl("/"),
  },
  circuits: {
    path: "/circuitos",
    url: getUrl("/circuitos"),
    region: (slug: string) => ({
      path: `/circuitos/${slug}`,
      url: getUrl(`/circuitos/${slug}`),
    }),
    province: (region: string, province: string) => ({
      path: `/circuitos/${region}/${province}`,
      url: getUrl(`/circuitos/${region}/${province}`),
    }),
    pista: (name: string) => ({
      path: `/circuitos/pista/${name}`,
      url: getUrl(`/circuitos/pista/${name}`),
    }),
  },
  guides: {
    path: "/guias",
    url: getUrl("/guias"),
    start: "/guias/como-empezar",
    ridingTips: "/guias/consejos-rodaje",
    maintenance: "/guias/mantenimiento-esencial",
    faq: "/guias/preguntas-frecuentes",
  },
  marcas: {
    path: "/marcas",
    url: getUrl("/marcas"),
    malcor: {
      path: "/marcas/malcor",
      url: getUrl("/marcas/malcor"),
      model: (slug: string) => ({
        path: `/marcas/malcor/${slug}`,
        url: getUrl(`/marcas/malcor/${slug}`),
      }),
    },
    imr: {
      path: "/marcas/imr",
      url: getUrl("/marcas/imr"),
      model: (slug: string) => ({
        path: `/marcas/imr/${slug}`,
        url: getUrl(`/marcas/imr/${slug}`),
      }),
    },
    shark: {
      path: "/marcas/shark",
      url: getUrl("/marcas/shark"),
      model: (slug: string) => ({
        path: `/marcas/shark/${slug}`,
        url: getUrl(`/marcas/shark/${slug}`),
      }),
    },
  },
  motores: {
    path: "/motores",
    url: getUrl("/motores"),
    zs155: {
      path: "/motores/zs155",
      url: getUrl("/motores/zs155"),
    },
    zs190: {
      path: "/motores/zs190",
      url: getUrl("/motores/zs190"),
    },
    yx160: {
      path: "/motores/yx160",
      url: getUrl("/motores/yx160"),
    },
    daytona190: {
      path: "/motores/daytona-190-4v",
      url: getUrl("/motores/daytona-190-4v"),
    },
    zs212: {
      path: "/motores/zs212",
      url: getUrl("/motores/zs212"),
    },
  },
};

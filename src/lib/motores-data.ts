export type Motor = {
  slug: string;
  name: string;
  brand: string;
  description: string;
  audience: string;
  specs: {
    label: string;
    value: string;
  }[];
  advantages: string[];
};

export const motoresData: Motor[] = [
  {
    slug: "zs155",
    name: "Motor ZS155 KLX Versión 01",
    brand: "Zongshen",
    description:
      "El motor ZS155 KLX versión 01 mejorado es una de las opciones más populares para pitbikes de asfalto en España. Con una cilindrada de 155.7cc y una potencia de 10.5Kw, este motor ofrece un equilibrio perfecto entre rendimiento y control para pilotos de todos los niveles. Incluye filtro de aceite interno, caja de cambios de relación cerrada y embrague de 6 discos tipo Daytona para una experiencia de conducción suave y fiable.",
    audience:
      "El motor ZS155 es ideal para pilotos que buscan un rendimiento sólido sin renunciar al control. Es perfecto para quienes se inician en el mundo de las pitbikes de 160cc o para aquellos que quieren una alternativa más económica y fácil de mantener que los motores de 190cc, pero con suficiente potencia para rodar cómodamente en circuito.",
    specs: [
      { label: "Cilindrada", value: "155.7cc (60mm x 55mm)" },
      { label: "Relación de compresión", value: "11.5:1" },
      { label: "Potencia máxima", value: "10.5Kw @ 9500rpm" },
      { label: "Par máximo", value: "11.5Nm @ 8000rpm" },
      { label: "Embrague", value: "6 discos con campana tipo Daytona" },
      { label: "Cambio", value: "4 velocidades (1-N-2-3-4)" },
      { label: "Refrigeración", value: "Por aceite" },
      { label: "Encendido", value: "Estilo Daytona (no incluido)" },
    ],
    advantages: [
      "Excelente relación calidad-precio en el mercado actual.",
      "Filtro de aceite interno para mayor durabilidad del motor.",
      "Caja de cambios de relación cerrada para cambios de marcha precisos.",
      "Diseño mejorado del árbol de levas para un mejor rendimiento.",
      "Muelles un 30% más duros para mayor fiabilidad a altas revoluciones.",
      "Amplia disponibilidad de recambios y accesorios en el mercado español.",
    ],
  },
  {
    slug: "zs190",
    name: "Motor ZS190 Zongshen",
    brand: "Zongshen",
    description:
      "El motor ZS190 es una de las opciones más populares para pilotos de pitbike de asfalto que buscan altas prestaciones. Fabricado por Zongshen, un fabricante reconocido en el sector, este motor ofrece dos versiones: 2V (2 válvulas) para quienes buscan fiabilidad y facilidad de mantenimiento, y 4V para aquellos que desean máxima potencia y rendimiento en circuito.",
    audience:
      "El ZS190 es perfecto para pilotos que buscan alta cilindrada y rendimiento. Las versiones 2V ofrecen un equilibrio entre potencia y fiabilidad, mientras que las 4V son ideales para competición y uso avanzado.",
    specs: [
      { label: "Cilindrada", value: "187.2cc" },
      { label: "Diámetro x Carrera", value: "62mm x 62mm" },
      { label: "Potencia máxima 2V", value: "19-20cv @ 9500rpm" },
      { label: "Par máximo 2V", value: "13Nm @ 8000rpm" },
      { label: "Cambio", value: "5 velocidades (1-N-2-3-4-5)" },
      { label: "Refrigeración", value: "Por aceite" },
      { label: "Arranque", value: "Por patada (versión 2V) y eléctrico + patada (versión 4V)" },
    ],
    advantages: [
      "Fabricante reconocido: Zongshen, marca líder en motores de pitbike.",
      "Amplia disponibilidad de recambios y accesorios en el mercado español.",
      "Excelente relación potencia-peso para su categoría.",
      "Diseño robusto y probado en múltiples configuraciones de pitbike.",
      "Compatible con la mayoría de chasis de pitbike de asfalto del mercado.",
    ],
  },
  {
    slug: "daytona-190-4v",
    name: "Motor Daytona Anima 190 4V",
    brand: "Daytona",
    description:
      "El Daytona Anima 190 4V es considerado uno de los motores más prestacionales y avanzados del mercado para pitbikes de asfalto. Fabricado por Daytona, una marca reconocida internacionalmente por su calidad e innovación en el sector de las minimotos y pitbikes, este motor ofrece un nivel de rendimiento excepcional para pilotos que buscan competir o simplemente disfrutar del máximo potencial en circuito.",
    audience:
      "Este motor está diseñado para pilotos experimentados que buscan el máximo rendimiento en circuito. Es la elección ideal para aquellos que participan en competiciones de pitbike o que simplemente desean la experiencia de conducción más potente y avanzada disponible en el mercado.",
    specs: [
      { label: "Cilindrada", value: "187.6cc" },
      { label: "Diámetro x Carrera", value: "62.0mm x 62mm" },
      { label: "Tipo de motor", value: "4 tiempos, SOHC, 4 válvulas" },
      { label: "Potencia máxima", value: "19-20cv a la rueda entre 9000/9500rpm" },
      { label: "Cambio", value: "4 velocidades (1-N-2-3-4)" },
      { label: "Refrigeración", value: "Por aire" },
      { label: "Embrague", value: "Multidisco en aceite (6 discos)" },
      { label: "Arranque", value: "Por patada con descompresor" },
    ],
    advantages: [
      "Tecnología de 4 válvulas para mayor eficiencia y potencia.",
      "Prestaciones superiores en su categoría.",
      "Fabricación de alta calidad por Daytona, marca de prestigio en el sector.",
      "Ideal para pilotos que buscan competir o rodar al máximo nivel.",
      "Gran disponibilidad de recambios específicos Daytona.",
      "Excelente respuesta del motor a altas revoluciones.",
    ],
  },
  {
    slug: "zs212",
    name: "Motor ZS212 Zongshen 2V",
    brand: "Zongshen",
    description:
      "El motor ZS212 representa la opción de máxima cilindrada dentro de la gama de motores Zongshen para pitbikes de asfalto. Con 212cc de desplazamiento, este motor está diseñado para pilotos que buscan el máximo par y potencia en configuraciones de alto rendimiento, ofreciendo una experiencia de conducción más agresiva y dinámica en circuito.",
    audience:
      "El ZS212 es ideal para pilotos experimentados que buscan la máxima cilindrada disponible en el mercado de pitbikes de asfalto. Es perfecto para quienes realizan montajes personalizados de alto rendimiento o buscan una experiencia de conducción más potente y agresiva en circuito.",
    specs: [
      { label: "Cilindrada", value: "212cc" },
      { label: "Diámetro x Carrera", value: "66mm x 62mm" },
      { label: "Tipo de motor", value: "2V (2 válvulas), 4 tiempos" },
      { label: "Potencia máxima", value: "20-22cv @ 9500rpm" },
      { label: "Par máximo", value: "13Nm @ 8000rpm" },
      { label: "Cambio", value: "5 velocidades (1-N-2-3-4-5)" },
      { label: "Embrague", value: "Multidisco en aceite" },
      { label: "Arranque", value: "Eléctrico y por patada" },
      { label: "Refrigeración", value: "Por aceite" },
      { label: "Sistema de encendido", value: "DCI (encendido digital)" },
    ],
    advantages: [
      "Mayor cilindrada de la gama Zongshen, ofreciendo el máximo par y potencia.",
      "Incluye kit de 212cc montado de fábrica para mayor fiabilidad.",
      "Arranque eléctrico de serie para mayor comodidad.",
      "5 velocidades para una amplia gama de desarrollos en circuito.",
      "Excelente opción para montajes de alto rendimiento y competición.",
      "Compatible con la mayoría de recambios de la gama ZS190.",
    ],
  },
  {
    slug: "yx160",
    name: "Motor YX160 Versión ZR1",
    brand: "YX",
    description:
      "El motor YX160 en su versión ZR1 representa una de las mejores opciones para pilotos que buscan un rendimiento sólido en cilindrada de 160cc. Esta versión mejorada incorpora importantes actualizaciones respecto a modelos anteriores, incluyendo un filtro de aceite interno, ejes de palanca de cambio y arranque más gruesos para mayor durabilidad, y muelles de válvulas un 30% más duros para mayor fiabilidad a altas revoluciones.",
    audience:
      "El YX160 ZR1 es ideal para pilotos que buscan un motor intermedio entre los 155cc y los 190cc. Es perfecto para quienes quieren más potencia que un 155 pero sin la complejidad o el coste de un 190. La versión ZR1 ofrece mayor fiabilidad y durabilidad, siendo una excelente elección tanto para uso recreativo como competitivo.",
    specs: [
      { label: "Cilindrada", value: "160cc" },
      { label: "Diámetro x Carrera", value: "57mm x 60mm" },
      { label: "Relación de compresión", value: "9.2:1" },
      { label: "Potencia máxima", value: "17cv reales de serie @ 9000rpm" },
      { label: "Par máximo", value: "11Nm @ 9000rpm" },
      { label: "Tipo de culata", value: "Estilo CRF110" },
      { label: "Cambio", value: "4 velocidades estilo europeo (1-N-2-3-4)" },
      { label: "Embrague", value: "Manual (permite arranque en cualquier velocidad)" },
      { label: "Refrigeración", value: "Por aire" },
    ],
    advantages: [
      "Filtro de aceite interno para mayor protección del motor.",
      "Nuevo diseño de cárter de embrague para fácil extracción sin desmontar el cárter completo.",
      "Ejes de palanca de cambio y arranque más gruesos para evitar roturas.",
      "Muelles de válvulas un 30% más duros para mayor fiabilidad a altas revoluciones.",
      "Encendido interior tipo Daytona para mejor rendimiento.",
      "Salida de culata CRF para amplia compatibilidad con chasis.",
    ],
  },
];

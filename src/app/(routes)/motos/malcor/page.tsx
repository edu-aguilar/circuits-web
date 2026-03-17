import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { malcorModels } from "@/lib/motos-data";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Motos Malcor de asfalto - Modelos, precios y caracteristicas | todopitbike.es",
  description:
    "Descubre los modelos Malcor para pitbike de asfalto: Racer y Super Racer en 160 y 190cc. Compara caracteristicas, precios y opiniones. Encuentra la mejor opción para rodar en circuito.",
};

export default function MalcorPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Motos Malcor de Asfalto",
    description:
      "Gama completa de pitbikes Malcor para asfalto: Racer y Super Racer en 160 y 190cc. Modelos con motores Z155 y ZS190, ideales para pilotos de todos los niveles.",
    url: "https://todopitbike.es/motos/malcor",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: malcorModels.map((model, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: model.name,
          description: model.summary,
          image: model.image,
          url: `https://todopitbike.es/motos/malcor/${model.slug}`,
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "targetAudience",
              value: model.audience,
            },
          ],
        },
      })),
    },
  };

  return (
    <>
      <Script
        id="schema-malcor"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <AppPage>
        <section className="rounded-2xl border border-black/10 bg-white p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-black/50">Motos</p>
          <h1 className="mt-3 text-4xl text-black">Malcor</h1>
          <p className="mt-3 text-base text-black/60">
            Malcor es una de las marcas de referencia en pitbike de asfalto en España. Con una amplia gama que abarca
            desde los 160cc hasta los 190cc, Malcor ofrece opciones tanto para pilotos que se inician en el mundo de las
            pitbikes como para aquellos que buscan rendimiento en circuito. La marca destaca por sus modelos Racer y
            Super Racer, equipados con motores Z155 y ZS190, ofreciendo una excelente relación calidad-precio para rodar
            en asfalto.
          </p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="text-2xl text-black">Modelos destacados</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
              <li>Racer R 160</li>
              <li>Racer R 190 Special Edition (motor ZS190)</li>
              <li>Super Racer 160</li>
              <li>Super Racer R 190</li>
              <li>Super Racer SMR 160 (motor Z155)</li>
              <li>Super Racer SMR 190</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <div className="relative h-52 w-full overflow-hidden rounded-xl border border-black/10">
              <Image
                src="https://www.solopitbike.es/c/105-category_default/pit-motard.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
                alt="Pit motard Malcor"
              />
            </div>
            <p className="mt-4 text-sm text-black/60">
              La gama Malcor en asfalto se centra en versiones Supermotard con diferentes configuraciones de motor y
              componentes.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">Que destaca en Malcor</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            <li>Opciones en 160cc y 190cc para distintos niveles.</li>
            <li>Versiones SMR con enfoque en asfalto.</li>
            <li>Configuraciones con motores Z155 y ZS190 segun modelo.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl text-black">Modelos Malcor</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {malcorModels.map((model) => (
              <Link
                key={model.slug}
                href={`/motos/malcor/${model.slug}`}
                className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-black/20"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-xl border border-black/10">
                  <Image
                    src={model.image}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                    alt={model.name}
                  />
                </div>
                <h3 className="mt-4 text-xl text-black">{model.name}</h3>
                <p className="mt-2 text-sm text-black/60">{model.summary}</p>
                <span className="mt-4 inline-flex text-xs text-black/50">Ver especificaciones</span>
              </Link>
            ))}
          </div>
        </section>
      </AppPage>
    </>
  );
}

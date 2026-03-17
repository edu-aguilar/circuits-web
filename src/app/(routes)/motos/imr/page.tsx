import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { imrModels } from "@/lib/motos-data";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Motos IMR de asfalto - Modelos, precios y caracteristicas | todopitbike.es",
  description:
    "Explora la gama de pitbikes IMR para asfalto: desde la Copa Alevin 90cc hasta los modelos GP20 y Race Pro de alta cilindrada. Compara caracteristicas, precios y encuentra tu moto ideal.",
};

export default function ImrPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Motos IMR de Asfalto",
    description:
      "Gama completa de pitbikes IMR para asfalto: desde la Copa Alevin 90cc hasta los modelos GP20 y Race Pro de alta cilindrada.",
    url: "https://todopitbike.es/motos/imr",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: imrModels.map((model, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: model.name,
          description: model.summary,
          image: model.image,
          url: `https://todopitbike.es/motos/imr/${model.slug}`,
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
        id="schema-imr"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <AppPage>
        <section className="rounded-2xl border border-black/10 bg-white p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-black/50">Motos</p>
          <h1 className="mt-3 text-4xl text-black">IMR</h1>
          <p className="mt-3 text-base text-black/60">
            IMR (Industrias Mouricio Racing) es una marca española referente en el mundo de las pitbikes de asfalto. Con
            una amplia gama que va desde los 90cc hasta los 300cc, IMR ofrece modelos para todos los niveles: desde la
            Copa Alevin para los más pequeños, hasta las series Corse, Race Pro y GP20 para pilotos avanzados que buscan
            rendimiento en circuito. La marca es conocida por su calidad de construcción y sus opciones personalizables
            para competir.
          </p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="text-2xl text-black">Modelos destacados</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
              <li>Copa Alevin 90</li>
              <li>Corse 110R, 140 RR, 155 RR y 190 RR</li>
              <li>Race Pro 155 y 190</li>
              <li>GP20 160, 190 y 190 Daytona</li>
              <li>GP20 LC 300</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <div className="relative h-52 w-full overflow-hidden rounded-xl border border-black/10">
              <Image
                src="https://impormotor.com/19445-home_default/pit-bike-imr-190-modelo-race-pro.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
                alt="Pitbike IMR Race Pro"
              />
            </div>
            <p className="mt-4 text-sm text-black/60">
              IMR ofrece lineas para iniciacion, evolucion y competicion, con diferentes alturas y configuraciones.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">Que destaca en IMR</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            <li>Amplia variedad de cilindradas y modelos.</li>
            <li>Series Corse y Race Pro orientadas a asfalto.</li>
            <li>Linea GP20 con opciones de alto rendimiento.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl text-black">Modelos IMR</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {imrModels.map((model) => (
              <Link
                key={model.slug}
                href={`/motos/imr/${model.slug}`}
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

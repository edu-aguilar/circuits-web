import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { sharkModels } from "@/lib/motos-data";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Motos Shark de asfalto - Modelos GP12 y MT12 | todopitbike.es",
  description:
    "Descubre los modelos Shark para pitbike de asfalto: MiniGP GP12 y MT12 con enfoque racing. Conoce sus caracteristicas, componentes de alto nivel y precios.",
};

export default function SharkPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Motos Shark de Asalto",
    description:
      "Gama de pitbikes Shark para asfalto: MiniGP GP12 y MT12 con enfoque racing y componentes de alto nivel.",
    url: "https://todopitbike.es/motos/shark",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sharkModels.map((model, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: model.name,
          description: model.summary,
          image: model.image,
          url: `https://todopitbike.es/motos/shark/${model.slug}`,
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
        id="schema-shark"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <AppPage>
        <section className="rounded-2xl border border-black/10 bg-white p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-black/50">Motos</p>
          <h1 className="mt-3 text-4xl text-black">Shark</h1>
          <p className="mt-3 text-base text-black/60">
            Shark es una marca especializada en pitbikes de asfalto con un claro enfoque racing. Sus modelos, como la
            MiniGP GP12 y la MT12, están diseñados para pilotos que buscan rendimiento puro en circuito. Shark destaca
            por utilizar componentes de alta gama como chasis CrMo (cromo molibdeno), horquillas regulables, frenos
            J.Juan y estriberas CNC, ofreciendo una experiencia de conducción similar a las motos de competición.
          </p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="text-2xl text-black">Modelos destacados</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
              <li>MiniGP GP12 con motor ZS190</li>
              <li>Pitbike MT12 190cc</li>
            </ul>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-sm text-black/60">
                Chasis CrMo (cromo molibdeno)
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-sm text-black/60">
                Frenos J.Juan y horquillas regulables
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-sm text-black/60">
                Estriberas CNC y componentes racing
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <div className="relative h-52 w-full overflow-hidden rounded-xl border border-black/10">
              <Image
                src="https://sharkminigp.com/wp-content/uploads/2024/04/MINIGP-SHARK-GP12-PRECIO.jpeg"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
                alt="Shark MiniGP GP12"
              />
            </div>
            <p className="mt-4 text-sm text-black/60">
              Modelos orientados a competicion con componentes de alto nivel y configuraciones de asfalto.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl text-black">Modelos Shark</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {sharkModels.map((model) => (
              <Link
                key={model.slug}
                href={`/motos/shark/${model.slug}`}
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

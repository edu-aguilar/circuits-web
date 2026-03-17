import Image from "next/image";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { motoresData } from "@/lib/motores-data";
import Script from "next/script";

const motor = motoresData.find((m) => m.slug === "zs212");

export const metadata: Metadata = {
  title: `Motor ZS212 para Pitbike - Especificaciones 2V, Características y Rendimiento | todopitbike.es`,
  description: motor?.description.slice(0, 160),
};

export default function Zs212Page() {
  if (!motor) return null;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: motor.name,
    description: motor.description,
    brand: {
      "@type": "Brand",
      name: motor.brand,
    },
    additionalProperty: motor.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };

  return (
    <>
      <Script
        id="schema-zs212"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <AppPage>
        <section className="rounded-2xl border border-black/10 bg-white p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-black/50">Motores</p>
          <h1 className="mt-3 text-4xl text-black">{motor.name}</h1>
          <p className="mt-3 text-base text-black/60">{motor.description}</p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="text-2xl text-black">Especificaciones Técnicas</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
              {motor.specs.map((spec) => (
                <li key={spec.label}>
                  <strong>{spec.label}:</strong> {spec.value}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <div className="relative h-52 w-full overflow-hidden rounded-xl border border-black/10">
              <Image
                src="https://www.solopitbike.es/c/54-category_default/motores.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
                alt={motor.name}
              />
            </div>
            <h3 className="mt-4 text-lg text-black">¿Para quién es el ZS212?</h3>
            <p className="mt-2 text-sm text-black/60">{motor.audience}</p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">Ventajas del ZS212</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            {motor.advantages.map((advantage) => (
              <li key={advantage}>{advantage}</li>
            ))}
          </ul>
        </section>
      </AppPage>
    </>
  );
}

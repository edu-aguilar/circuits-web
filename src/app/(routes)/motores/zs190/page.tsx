import Image from "next/image";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { motoresData } from "@/lib/motores-data";
import Script from "next/script";

const motor = motoresData.find((m) => m.slug === "zs190");

export const metadata: Metadata = {
  title: `Motor ZS190 para Pitbike - Especificaciones 2V y 4V, Características | todopitbike.es`,
  description: motor?.description.slice(0, 160),
};

export default function Zs190Page() {
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
        id="schema-zs190"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <AppPage>
        <section className="rounded-2xl border border-black/10 bg-white p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-black/50">Motores</p>
          <h1 className="mt-3 text-4xl text-black">{motor.name}</h1>
          <p className="mt-3 text-base text-black/60">{motor.description}</p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="text-2xl text-black">ZS190 2V (2 Válvulas)</h2>
            <p className="mt-2 text-sm text-black/60">
              La versión 2V es la más equilibrada para pilotos que buscan un buen rendimiento sin complicaciones
              mecánicas.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
              {motor.specs.slice(0, 5).map((spec) => (
                <li key={spec.label}>
                  <strong>{spec.label}:</strong> {spec.value}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-black/60">
              Esta versión es ideal para pilotos que se inician en motores de alta cilindrada o que priorizan la
              fiabilidad y el mantenimiento sencillo frente a la máxima potencia.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="text-2xl text-black">ZS190 4V (4 Válvulas)</h2>
            <p className="mt-2 text-sm text-black/60">
              La versión 4V ofrece el máximo rendimiento para pilotos avanzados y competidores.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
              <li>
                <strong>Cilindrada:</strong> 190cc
              </li>
              <li>
                <strong>Diámetro x Carrera:</strong> 62mm x 62mm
              </li>
              <li>
                <strong>Potencia máxima:</strong> 22-24cv
              </li>
              <li>
                <strong>Tipo:</strong> 4 válvulas (SOHC)
              </li>
              <li>
                <strong>Cambio:</strong> 5 velocidades
              </li>
              <li>
                <strong>Arranque:</strong> Eléctrico y por patada
              </li>
              <li>
                <strong>Refrigeración:</strong> Por aire o aceite según modelo
              </li>
            </ul>
            <p className="mt-6 text-sm text-black/60">
              La versión 4V es perfecta para pilotos que compiten o buscan el máximo rendimiento en circuito, con mayor
              potencia disponible a altas revoluciones.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">Características Comunes del ZS190</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            {motor.advantages.map((advantage) => (
              <li key={advantage}>{advantage}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-black/10 bg-white p-6">
          <div className="relative h-64 w-full overflow-hidden rounded-xl border border-black/10">
            <Image
              src="/zs190.avif"
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover"
              alt={motor.name}
            />
          </div>
        </section>
      </AppPage>
    </>
  );
}

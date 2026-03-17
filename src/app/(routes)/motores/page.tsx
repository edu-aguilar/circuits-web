import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { Breadcrumbs } from "@/app/common/ui/components/Breadcrumbs";
import { motoresData } from "@/lib/motores-data";

export const metadata: Metadata = {
  title: "Motores para Pitbike de Asalto - ZS155, ZS190, Daytona, YX160 | todopitbike.es",
  description:
    "Descubre los mejores motores para pitbike de asfalto. ZS155, ZS190, Daytona 190 4V, ZS212 y YX160. Especificaciones, características y comparativas.",
};

export default function MotoresPage() {
  return (
    <AppPage>
      <Breadcrumbs items={[{ label: "Motores", href: "/motores" }]} />
      <section className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">Catálogo</p>
        <h1 className="mt-4 text-4xl text-black md:text-5xl">Motores para Pitbike de Asfalto</h1>
        <p className="mt-3 max-w-2xl text-sm text-black/60 md:text-base">
          Encuentra el motor perfecto para tu pitbike. Comparamos las mejores opciones del mercado: ZS155, ZS190,
          Daytona 190 4V, ZS212 y YX160. Especificaciones técnicas, ventajas y características.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {motoresData.map((motor) => {
          const firstSpec = motor.specs.find((s) => s.label === "Cilindrada");
          const powerSpec = motor.specs.find((s) => s.label === "Potencia máxima");

          return (
            <Link
              key={motor.slug}
              href={`/motores/${motor.slug}`}
              className="group block rounded-2xl border border-black/10 bg-white p-6 transition-all hover:border-black/30 hover:shadow-lg"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-xl bg-black/5">
                <Image src={motor.image} alt={motor.name} fill className="object-cover" />
              </div>
              <h2 className="mt-4 text-2xl text-black group-hover:text-black/80">{motor.name}</h2>
              <p className="mt-2 text-sm text-black/60 line-clamp-2">{motor.description}</p>
              <div className="mt-3 flex gap-4 text-xs font-medium text-black/50">
                {firstSpec && <span>{firstSpec.value}</span>}
                {powerSpec && <span>{powerSpec.value}</span>}
              </div>
            </Link>
          );
        })}
      </section>
    </AppPage>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { sharkModels } from "@/lib/motos-data";

export const metadata: Metadata = {
  title: "Motos Shark de asfalto - modelos y caracteristicas",
  description: "Modelos Shark GP12 y MT12 para pitbike asfalto con enfoque racing y componentes de alto nivel.",
};

export default function SharkPage() {
  return (
    <AppPage>
      <section className="rounded-2xl border border-black/10 bg-white p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">Motos</p>
        <h1 className="mt-3 text-4xl text-black">Shark</h1>
        <p className="mt-3 text-base text-black/60">
          Shark centra su gama en modelos listos para competir en asfalto con componentes destacados.
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
  );
}

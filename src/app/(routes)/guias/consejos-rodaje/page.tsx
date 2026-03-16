import Link from "next/link";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { routes } from "@/app/common/routes";

export const metadata: Metadata = {
  title: "Consejos de rodaje en pitbike de asfalto",
  description:
    "Consejos practicos para mejorar trazada, frenada y postura en pitbike de asfalto. Aprende a rodar con control.",
};

const tips = [
  "Mira lejos: la moto va donde miras",
  "Frena recto y suelta antes de inclinar",
  "Entra suave y acelera progresivo al salir",
  "Usa todo el ancho de pista con trazada limpia",
  "Postura activa: codos abiertos y mirada alta",
  "Calienta neumaticos antes de exigir ritmo",
  "Constancia > velocidad: busca ritmos estables",
  "Descansa entre tandas para mantener la tecnica",
];

export default function ConsejosRodajePage() {
  return (
    <AppPage>
      <section className="rounded-2xl border border-black/10 bg-white p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">Consejos utiles</p>
        <h1 className="mt-3 text-4xl text-black">Consejos de rodaje</h1>
        <p className="mt-3 text-base text-black/60">
          Recomendaciones simples para rodar mas seguro y mas rapido sin forzar la moto.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {tips.map((tip) => (
          <div key={tip} className="rounded-2xl border border-black/10 bg-white p-5">
            <p className="text-sm text-black/70">{tip}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href={routes.circuits.path}
          className="inline-flex items-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm text-black transition hover:border-black/20"
        >
          Ver circuitos con ficha tecnica
        </Link>
      </section>
    </AppPage>
  );
}

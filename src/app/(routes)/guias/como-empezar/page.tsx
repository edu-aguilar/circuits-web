import Link from "next/link";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { routes } from "@/app/common/routes";

export const metadata: Metadata = {
  title: "Como empezar en pitbike de asfalto - guia practica",
  description:
    "Guia practica para tu primer dia en circuito: equipo basico, seguridad, normas y preparacion de la pitbike.",
};

export default function ComoEmpezarPage() {
  return (
    <AppPage>
      <section className="rounded-2xl border border-black/10 bg-white p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">Guia practica</p>
        <h1 className="mt-3 text-4xl text-black">Como empezar en pitbike de asfalto</h1>
        <p className="mt-3 text-base text-black/60">
          Si es tu primera vez en circuito, aqui tienes lo esencial para empezar con seguridad y sin gastar de mas.
        </p>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">Equipo basico</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            <li>Casco integral homologado</li>
            <li>Guantes con proteccion</li>
            <li>Botas o calzado rigido</li>
            <li>Rodilleras y coderas (o mono)</li>
            <li>Proteccion de pecho (opcional pero recomendable)</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">La moto antes de rodar</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            <li>Presion de neumaticos adecuada</li>
            <li>Cadena lubricada y con holgura correcta</li>
            <li>Frenos firmes y pastillas con material</li>
            <li>Tornilleria revisada</li>
            <li>Gas y freno sin juego excesivo</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">Normas del circuito</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            <li>Respeta el sentido de la pista</li>
            <li>No te detengas en zonas ciegas</li>
            <li>Entra y sal por las zonas indicadas</li>
            <li>Aprende el significado de las banderas</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">Primeras tandas</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            <li>Calienta 2 o 3 vueltas antes de forzar</li>
            <li>Busca control y constancia, no tiempos</li>
            <li>Descansa entre tandas para mantener la tecnica</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href={routes.circuits.path}
          className="inline-flex items-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm text-black transition hover:border-black/20"
        >
          Explorar circuitos
        </Link>
      </section>
    </AppPage>
  );
}

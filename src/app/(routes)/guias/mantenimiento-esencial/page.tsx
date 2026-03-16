import Link from "next/link";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { routes } from "@/app/common/routes";

export const metadata: Metadata = {
  title: "Mantenimiento esencial para pitbike de asfalto",
  description:
    "Checklist simple de mantenimiento: antes y despues de rodar, y tareas periodicas para pitbike de asfalto.",
};

export default function MantenimientoEsencialPage() {
  return (
    <AppPage>
      <section className="rounded-2xl border border-black/10 bg-white p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">Checklist rapido</p>
        <h1 className="mt-3 text-4xl text-black">Mantenimiento esencial</h1>
        <p className="mt-3 text-base text-black/60">
          Revisa lo importante para evitar fallos y alargar la vida de la pitbike.
        </p>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">Antes de rodar</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            <li>Presion de neumaticos ajustada</li>
            <li>Cadena limpia y lubricada</li>
            <li>Freno delantero firme</li>
            <li>Nivel de aceite correcto</li>
            <li>Tornillos criticos revisados</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">Despues de rodar</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            <li>Limpia suciedad de transmision</li>
            <li>Revisa desgaste de pastillas</li>
            <li>Comprueba neumaticos y posibles cortes</li>
            <li>Aprieta tornillos sueltos</li>
            <li>Revisa holgura de cadena</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">Mantenimiento periodico</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            <li>Cambio de aceite segun horas de uso</li>
            <li>Revision y limpieza de filtro</li>
            <li>Purga de frenos si el tacto cambia</li>
            <li>Ajuste de valvulas (si aplica)</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href={routes.circuits.path}
          className="inline-flex items-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm text-black transition hover:border-black/20"
        >
          Buscar circuitos
        </Link>
      </section>
    </AppPage>
  );
}

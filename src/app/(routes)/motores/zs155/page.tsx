import Image from "next/image";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";

export const metadata: Metadata = {
  title: "Motor ZS155 para pitbike - prestaciones y uso",
  description: "Motor ZS155 para pitbike de asfalto. Resumen de prestaciones y caracteristicas segun proveedor.",
};

export default function Zs155Page() {
  return (
    <AppPage>
      <section className="rounded-2xl border border-black/10 bg-white p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">Motores</p>
        <h1 className="mt-3 text-4xl text-black">ZS155</h1>
        <p className="mt-3 text-base text-black/60">Motor de 155cc muy usado en pitbike de asfalto.</p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">Prestaciones</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            <li>Motor ZS155 nueva version.</li>
            <li>Formato pensado para pitbike de asfalto.</li>
            <li>Salida tipo CRF segun proveedor.</li>
          </ul>
          <p className="mt-6 text-xs text-black/50">Potencia y especificaciones segun proveedor.</p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <div className="relative h-52 w-full overflow-hidden rounded-xl border border-black/10">
            <Image
              src="https://www.solopitbike.es/c/54-category_default/motores.jpg"
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover"
              alt="Motor ZS155"
            />
          </div>
          <p className="mt-4 text-sm text-black/60">
            Motor habitual en configuraciones de asfalto con un equilibrio entre respuesta y control.
          </p>
        </div>
      </section>
    </AppPage>
  );
}

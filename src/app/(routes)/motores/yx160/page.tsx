import Image from "next/image";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";

export const metadata: Metadata = {
  title: "Motor YX160 para pitbike - prestaciones y uso",
  description: "Motor YX160 version ZR1 con cambio 1N234. Resumen de caracteristicas segun proveedor.",
};

export default function Yx160Page() {
  return (
    <AppPage>
      <section className="rounded-2xl border border-black/10 bg-white p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">Motores</p>
        <h1 className="mt-3 text-4xl text-black">YX160</h1>
        <p className="mt-3 text-base text-black/60">Motor de 160cc con version ZR1 y cambio 1N234.</p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">Prestaciones</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            <li>YX160 version ZR1.</li>
            <li>Cambio 1N234 segun proveedor.</li>
            <li>Salida tipo CRF segun configuracion.</li>
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
              alt="Motor YX160"
            />
          </div>
          <p className="mt-4 text-sm text-black/60">
            Motor habitual en montajes 160cc para asfalto con respuesta progresiva.
          </p>
        </div>
      </section>
    </AppPage>
  );
}

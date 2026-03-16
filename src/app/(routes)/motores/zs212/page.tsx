import Image from "next/image";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";

export const metadata: Metadata = {
  title: "Motor ZS212 - prestaciones y uso",
  description:
    "Motor ZS212 2V con arranque electrico y 5 velocidades. Resumen para pitbike de asfalto segun proveedor.",
};

export default function Zs212Page() {
  return (
    <AppPage>
      <section className="rounded-2xl border border-black/10 bg-white p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">Motores</p>
        <h1 className="mt-3 text-4xl text-black">ZS212</h1>
        <p className="mt-3 text-base text-black/60">
          Motor de 212cc con arranque electrico y 5 velocidades segun proveedor.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">Prestaciones</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            <li>Motor ZS212 2V.</li>
            <li>Arranque electrico.</li>
            <li>5 velocidades.</li>
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
              alt="Motor ZS212"
            />
          </div>
          <p className="mt-4 text-sm text-black/60">
            Pensado para quienes buscan mas cilindrada en montajes de asfalto.
          </p>
        </div>
      </section>
    </AppPage>
  );
}

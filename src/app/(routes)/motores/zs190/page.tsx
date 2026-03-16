import Image from "next/image";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";

export const metadata: Metadata = {
  title: "Motor ZS190 para pitbike - prestaciones y uso",
  description: "Motor ZS190 en versiones 2V y 4V para pitbike de asfalto. Potencias y caracteristicas segun proveedor.",
};

export default function Zs190Page() {
  return (
    <AppPage>
      <section className="rounded-2xl border border-black/10 bg-white p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">Motores</p>
        <h1 className="mt-3 text-4xl text-black">ZS190</h1>
        <p className="mt-3 text-base text-black/60">Motor muy popular en pitbike de asfalto con versiones 2V y 4V.</p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">ZS190 2V</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            <li>Potencia indicada: 19/20cv.</li>
            <li>5 velocidades.</li>
            <li>Arranque a patada.</li>
          </ul>
          <p className="mt-6 text-xs text-black/50">Potencia y especificaciones segun proveedor.</p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">ZS190 4V</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            <li>Potencia indicada: 22/24cv.</li>
            <li>5 velocidades.</li>
            <li>Arranque electrico y a patada.</li>
          </ul>
          <p className="mt-6 text-xs text-black/50">Potencia y especificaciones segun proveedor.</p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-black/10 bg-white p-6">
        <div className="relative h-52 w-full overflow-hidden rounded-xl border border-black/10">
          <Image
            src="https://www.solopitbike.es/c/54-category_default/motores.jpg"
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover"
            alt="Motor ZS190"
          />
        </div>
      </section>
    </AppPage>
  );
}

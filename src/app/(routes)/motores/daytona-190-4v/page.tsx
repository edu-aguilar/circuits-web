import Image from "next/image";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";

export const metadata: Metadata = {
  title: "Motor Daytona 190 4V - prestaciones y uso",
  description: "Motor Daytona 190F 4V con potencia declarada de 24cv segun proveedor. Resumen para pitbike asfalto.",
};

export default function Daytona190Page() {
  return (
    <AppPage>
      <section className="rounded-2xl border border-black/10 bg-white p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">Motores</p>
        <h1 className="mt-3 text-4xl text-black">Daytona 190 4V</h1>
        <p className="mt-3 text-base text-black/60">
          Motor de alto rendimiento para pitbike de asfalto con potencia declarada de 24cv.
        </p>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="text-2xl text-black">Prestaciones</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/60">
            <li>Daytona 190F 4V.</li>
            <li>Potencia indicada: 24cv.</li>
            <li>Version de alto rendimiento.</li>
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
              alt="Motor Daytona 190 4V"
            />
          </div>
          <p className="mt-4 text-sm text-black/60">Enfocado a pilotos que buscan el maximo rendimiento en asfalto.</p>
        </div>
      </section>
    </AppPage>
  );
}

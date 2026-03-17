import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { Breadcrumbs } from "@/app/common/ui/components/Breadcrumbs";
import { routes } from "@/app/common/routes";
import { malcorModels } from "@/lib/motos-data";
import { imrModels } from "@/lib/motos-data";
import { sharkModels } from "@/lib/motos-data";

export const metadata: Metadata = {
  title: "Marcas de Pitbikes de Asfalto en España - Malcor, IMR, Shark | todopitbike.es",
  description:
    "Descubre las mejores marcas de pitbikes de asfalto en España. Compara Malcor, IMR y Shark. Encuentra el modelo perfecto para rodar en circuito.",
};

export default function MarcasPage() {
  return (
    <AppPage>
      <Breadcrumbs items={[{ label: "Marcas", href: routes.marcas.path }]} />
      <section className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">Catálogo</p>
        <h1 className="mt-4 text-4xl text-black md:text-5xl">Marcas de Pitbikes de Asfalto</h1>
        <p className="mt-3 max-w-2xl text-sm text-black/60 md:text-base">
          Descubre las principales marcas de pitbikes de asfalto disponibles en España. Compara características, modelos
          y encuentra la marca perfecta para tu próxima temporada en circuito.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link
          key="malcor"
          href={routes.marcas.malcor.path}
          className="group block rounded-2xl border border-black/10 bg-white p-6 transition-all hover:border-black/30 hover:shadow-lg"
        >
          <div className="relative h-40 w-full overflow-hidden rounded-xl bg-black/5">
            <Image src={malcorModels[0].image} alt="Pitbikes Malcor" fill className="object-cover" />
          </div>
          <h2 className="mt-4 text-2xl text-black group-hover:text-black/80">Malcor</h2>
          <p className="mt-2 text-sm text-black/60">
            Marca de referencia en pitbikes de asfalto en España. Gamas Racer y Super Racer en 160 y 190cc.
          </p>
          <p className="mt-3 text-xs font-medium text-black/50">{malcorModels.length} modelos</p>
        </Link>
        <Link
          key="imr"
          href={routes.marcas.imr.path}
          className="group block rounded-2xl border border-black/10 bg-white p-6 transition-all hover:border-black/30 hover:shadow-lg"
        >
          <div className="relative h-40 w-full overflow-hidden rounded-xl bg-black/5">
            <Image src={imrModels[0].image} alt="Pitbikes IMR" fill className="object-cover" />
          </div>
          <h2 className="mt-4 text-2xl text-black group-hover:text-black/80">IMR</h2>
          <p className="mt-2 text-sm text-black/60">
            Marca española líder en pitbikes. Desde la Copa Alevin 90cc hasta modelos GP20 de alta cilindrada.
          </p>
          <p className="mt-3 text-xs font-medium text-black/50">{imrModels.length} modelos</p>
        </Link>
        <Link
          key="shark"
          href={routes.marcas.shark.path}
          className="group block rounded-2xl border border-black/10 bg-white p-6 transition-all hover:border-black/30 hover:shadow-lg"
        >
          <div className="relative h-40 w-full overflow-hidden rounded-xl bg-black/5">
            <Image src={sharkModels[0].image} alt="Pitbikes Shark" fill className="object-cover" />
          </div>
          <h2 className="mt-4 text-2xl text-black group-hover:text-black/80">Shark</h2>
          <p className="mt-2 text-sm text-black/60">
            Especializada en pitbikes racing. Modelos MiniGP GP12 y MT12 con componentes de alto nivel.
          </p>
          <p className="mt-3 text-xs font-medium text-black/50">{sharkModels.length} modelos</p>
        </Link>
      </section>
    </AppPage>
  );
}

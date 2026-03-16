import Image from "next/image";
import Link from "next/link";
import { AppPage } from "./common/ui/components/AppPage";
import { routes } from "./common/routes";

export default function Home() {
  return (
    <AppPage>
      <section className="rounded-3xl border border-black/10 bg-white">
        <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-black/50">Guia de circuitos</p>
            <h1 className="mt-4 text-4xl leading-tight text-black md:text-5xl">
              Encuentra tu pista de pitbike en Espana
            </h1>
            <p className="mt-4 text-base text-black/70 md:text-lg">
              Filtra por region o provincia, revisa ubicacion, precios y detalles tecnicos.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={routes.circuits.path}
                className="inline-flex items-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm text-black transition hover:border-black/20"
              >
                Explorar circuitos
              </Link>
            </div>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-[28px] border border-black/10">
            <Image
              src="https://ik.imagekit.io/yulujpacgzq/todopitbike/karting-circuit_zEDaaAEyo.jpg"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              alt="pitbike-circuit"
            />
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Filtra sin perder tiempo",
            copy: "Region, provincia o nombre. La busqueda es directa y sin rodeos.",
          },
          {
            title: "Compara antes de ir",
            copy: "Direccion, precios y ajustes del circuito en la misma ficha.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="text-xl text-black">{item.title}</h2>
            <p className="mt-3 text-sm text-black/60">{item.copy}</p>
          </div>
        ))}
      </section>
    </AppPage>
  );
}

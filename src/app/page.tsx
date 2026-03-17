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

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-black/50">Guias practicas</p>
            <h2 className="mt-3 text-3xl text-black">Aprende, cuida y mejora</h2>
            <p className="mt-2 text-sm text-black/60">
              Recursos pensados para empezar, rodar mejor y mantener tu pitbike lista para pista.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Link
            href={routes.guides.start}
            className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-black/20"
          >
            <h3 className="text-xl text-black">Como empezar en pitbike de asfalto</h3>
            <p className="mt-3 text-sm text-black/60">Equipo basico, seguridad y primeros pasos en circuito.</p>
            <span className="mt-4 inline-flex text-xs text-black/50">Ver guia</span>
          </Link>
          <Link
            href={routes.guides.ridingTips}
            className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-black/20"
          >
            <h3 className="text-xl text-black">Consejos de rodaje</h3>
            <p className="mt-3 text-sm text-black/60">Trazada, frenada y postura para rodar con control.</p>
            <span className="mt-4 inline-flex text-xs text-black/50">Ver consejos</span>
          </Link>
          <Link
            href={routes.guides.maintenance}
            className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-black/20"
          >
            <h3 className="text-xl text-black">Mantenimiento esencial</h3>
            <p className="mt-3 text-sm text-black/60">Checklist antes y despues de rodar para evitar fallos.</p>
            <span className="mt-4 inline-flex text-xs text-black/50">Ver mantenimiento</span>
          </Link>
          <Link
            href={routes.guides.faq}
            className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-black/20"
          >
            <h3 className="text-xl text-black">Preguntas frecuentes</h3>
            <p className="mt-3 text-sm text-black/60">Respuestas rapidas sobre precios, normas y equipo.</p>
            <span className="mt-4 inline-flex text-xs text-black/50">Ver FAQ</span>
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-black/50">Motos</p>
          <h2 className="mt-3 text-3xl text-black">Marcas y modelos de referencia</h2>
          <p className="mt-2 text-sm text-black/60">
            Resumen rapido de las marcas mas conocidas en pitbike de asfalto y sus modelos mas populares.
          </p>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Link
            href={routes.marcas.malcor.path}
            className="rounded-2xl border border-black/10 bg-white p-5 transition hover:border-black/20"
          >
            <div className="relative h-36 w-full overflow-hidden rounded-xl border border-black/10">
              <Image
                src="/malcor-brand.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover"
                alt="Pit motard Malcor"
              />
            </div>
            <h3 className="mt-4 text-xl text-black">Malcor</h3>
            <p className="mt-2 text-sm text-black/60">
              Gama Racer y Super Racer en 160 y 190. Modelos SMR con motor Z155 y ZS190.
            </p>
            <span className="mt-4 inline-flex text-xs text-black/50">Ver modelos Malcor</span>
          </Link>
          <Link
            href={routes.marcas.imr.path}
            className="rounded-2xl border border-black/10 bg-white p-5 transition hover:border-black/20"
          >
            <div className="relative h-36 w-full overflow-hidden rounded-xl border border-black/10">
              <Image
                src="https://impormotor.com/19445-home_default/pit-bike-imr-190-modelo-race-pro.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover"
                alt="Pitbike IMR Race Pro"
              />
            </div>
            <h3 className="mt-4 text-xl text-black">IMR</h3>
            <p className="mt-2 text-sm text-black/60">
              Lineas Corse, Race Pro y GP20 con opciones 90-300cc para distintos niveles.
            </p>
            <span className="mt-4 inline-flex text-xs text-black/50">Ver modelos IMR</span>
          </Link>
          <Link
            href={routes.marcas.shark.path}
            className="rounded-2xl border border-black/10 bg-white p-5 transition hover:border-black/20"
          >
            <div className="relative h-36 w-full overflow-hidden rounded-xl border border-black/10">
              <Image
                src="https://sharkminigp.com/wp-content/uploads/2024/04/MINIGP-SHARK-GP12-PRECIO.jpeg"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover"
                alt="Shark MiniGP GP12"
              />
            </div>
            <h3 className="mt-4 text-xl text-black">Shark</h3>
            <p className="mt-2 text-sm text-black/60">
              GP12 y MT12 con enfoque racing, chasis CrMo y componentes de alto nivel.
            </p>
            <span className="mt-4 inline-flex text-xs text-black/50">Ver modelos Shark</span>
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-black/50">Motores</p>
          <h2 className="mt-3 text-3xl text-black">Motores mas usados en asfalto</h2>
          <p className="mt-2 text-sm text-black/60">
            Comparativa rapida de motores populares con potencia y uso recomendado segun proveedor.
          </p>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Link
            href={routes.motores.zs155.path}
            className="rounded-2xl border border-black/10 bg-white p-5 transition hover:border-black/20"
          >
            <div className="relative h-36 w-full overflow-hidden rounded-xl border border-black/10">
              <Image
                src="/zs155.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover"
                alt="Motor ZS155"
              />
            </div>
            <h3 className="mt-4 text-xl text-black">ZS155</h3>
            <p className="mt-2 text-sm text-black/60">Nueva version popular en 155cc para asfalto.</p>
            <span className="mt-4 inline-flex text-xs text-black/50">Ver ficha ZS155</span>
          </Link>
          <Link
            href={routes.motores.zs190.path}
            className="rounded-2xl border border-black/10 bg-white p-5 transition hover:border-black/20"
          >
            <div className="relative h-36 w-full overflow-hidden rounded-xl border border-black/10">
              <Image
                src="/zs190.avif"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover"
                alt="Motor ZS190"
              />
            </div>
            <h3 className="mt-4 text-xl text-black">ZS190</h3>
            <p className="mt-2 text-sm text-black/60">Version 2V y 4V con potencias altas.</p>
            <span className="mt-4 inline-flex text-xs text-black/50">Ver ficha ZS190</span>
          </Link>
          <Link
            href={routes.motores.yx160.path}
            className="rounded-2xl border border-black/10 bg-white p-5 transition hover:border-black/20"
          >
            <div className="relative h-36 w-full overflow-hidden rounded-xl border border-black/10">
              <Image
                src="/yx160.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover"
                alt="Motor YX160"
              />
            </div>
            <h3 className="mt-4 text-xl text-black">YX160</h3>
            <p className="mt-2 text-sm text-black/60">Motor 160cc con cambio 1N234 version ZR1.</p>
            <span className="mt-4 inline-flex text-xs text-black/50">Ver ficha YX160</span>
          </Link>
          <Link
            href={routes.motores.daytona190.path}
            className="rounded-2xl border border-black/10 bg-white p-5 transition hover:border-black/20"
          >
            <div className="relative h-36 w-full overflow-hidden rounded-xl border border-black/10">
              <Image
                src="/daytona1904v.webp"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover"
                alt="Motor Daytona 190"
              />
            </div>
            <h3 className="mt-4 text-xl text-black">Daytona 190 4V</h3>
            <p className="mt-2 text-sm text-black/60">Motor de alto rendimiento con potencia declarada.</p>
            <span className="mt-4 inline-flex text-xs text-black/50">Ver ficha Daytona</span>
          </Link>
          <Link
            href={routes.motores.zs212.path}
            className="rounded-2xl border border-black/10 bg-white p-5 transition hover:border-black/20"
          >
            <div className="relative h-36 w-full overflow-hidden rounded-xl border border-black/10">
              <Image
                src="/zs212.webp"
                fill
                sizes="(max-width: 1024px) 100vw, 300px"
                className="object-cover"
                alt="Motor ZS212"
              />
            </div>
            <h3 className="mt-4 text-xl text-black">ZS212</h3>
            <p className="mt-2 text-sm text-black/60">Motor 212cc con arranque electrico y 5 velocidades.</p>
            <span className="mt-4 inline-flex text-xs text-black/50">Ver ficha ZS212</span>
          </Link>
        </div>
      </section>
    </AppPage>
  );
}

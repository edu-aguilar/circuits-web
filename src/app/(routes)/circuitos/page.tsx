import { CircuitSearchParams } from "@/app/circuits/ui/CircuitSearchParams";
import { CircuitCardSkeleton } from "@/app/circuits/ui/components/CircuitCardSkeleton";
import { CircuitFilters } from "@/app/circuits/ui/components/CircuitFilters";
import { CircuitList } from "@/app/circuits/ui/components/CircuitList";
import { Province } from "@/app/common/domain/types/Province";
import { Region } from "@/app/common/domain/types/Region";
import { findProvinces } from "@/app/common/ui/actions/findProvinces";
import { findRegions } from "@/app/common/ui/actions/findRegions";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { Breadcrumbs } from "@/app/common/ui/components/Breadcrumbs";
import { ReportComponent } from "@/app/common/ui/components/ReportComponent";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { groupProvincesByRegion } from "@/app/circuits/utils/locationSlugs";

type CircuitsPageProps = {
  searchParams?: {
    nombre?: string;
    provincia: string;
  };
};

export async function generateMetadata({ searchParams }: CircuitsPageProps): Promise<Metadata> {
  const urlSearchParams = new URLSearchParams(searchParams);
  const circuitName = urlSearchParams.get(CircuitSearchParams.name) ?? "";
  const provinceName = urlSearchParams.get(CircuitSearchParams.province) ?? "";
  const regionName = urlSearchParams.get(CircuitSearchParams.region) ?? "";
  const hasFilters = Boolean(circuitName || provinceName || regionName);

  let title = "Circuitos de Pitbike en España - encuentra pistas por provincia y nombre";
  let description =
    "Explora los mejores circuitos de pitbike de asfalto en España. Busca por nombre o provincia para encontrar la pista perfecta para rodar con tu pitbike. Toda la información que necesitas sobre circuitos cerca de ti.";

  if (provinceName) {
    title = `Circuitos de Pitbike en ${provinceName} - encuentra circuitos de asfalto para pitbikes`;
    description = `Descubre los mejores circuitos de pitbike de asfalto en la provincia de ${provinceName}. Información completa sobre pistas para rodar en pitbike. ¡Encuentra tu circuito más cercano!`;
  }

  if (!provinceName && regionName) {
    title = `Circuitos de Pitbike en ${regionName} - encuentra circuitos de asfalto para pitbikes`;
    description = `Descubre los mejores circuitos de pitbike de asfalto en la provincia de ${regionName}. Información completa sobre pistas para rodar en pitbike. ¡Encuentra tu circuito más cercano!`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: "/circuitos",
    },
    robots: hasFilters ? { index: false, follow: true } : undefined,
  };
}

export default async function CircuitsPage({ searchParams }: CircuitsPageProps) {
  const urlSearchParams = new URLSearchParams(searchParams);
  const circuitName = urlSearchParams.get(CircuitSearchParams.name) ?? undefined;
  const provinceName = urlSearchParams.get(CircuitSearchParams.province) ?? "";
  const regionName = urlSearchParams.get(CircuitSearchParams.region) ?? "";

  const provinces = await findProvinces();
  const regions = await findRegions();
  const currentProvince = Province.findProvinceBy("urlName", provinceName, provinces);
  const currentRegion = Region.findRegionBy("urlName", regionName, regions);
  const regionsWithProvinces = groupProvincesByRegion(regions, provinces);

  return (
    <AppPage>
      <Breadcrumbs items={[{ label: "Circuitos", href: "/circuitos" }]} />
      <section className="mb-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-black/50">Catalogo nacional</p>
            <h1 className="mt-4 text-4xl text-black md:text-5xl">Circuitos de pitbike en Espana</h1>
            <p className="mt-3 max-w-2xl text-sm text-black/60 md:text-base">
              Descubre pistas de pitbike de asfalto por region, provincia o nombre. Cada ficha incluye ubicacion,
              tarifas, precios de entrada, opciones de alquiler de moto y servicios disponibles. Planea tu proxima tanda
              o apuntate a eventos y jornadas de rodadas.
            </p>
          </div>
          <ReportComponent title="Falta un circuito" url="https://forms.gle/6KwW4BNpQ1DnZ6AM6" />
        </div>
        <div className="mt-6 rounded-2xl border border-black/10 bg-white p-4 md:p-6">
          <CircuitFilters
            provinces={provinces}
            currentProvince={currentProvince}
            regions={regions}
            currentRegion={currentRegion}
          />
        </div>
      </section>

      <section className="mb-10 rounded-2xl border border-black/10 bg-white p-6 md:p-8">
        <h2 className="text-2xl text-black">Circuitos de pitbike de asfalto por region y provincia</h2>
        <p className="mt-2 text-sm text-black/60">
          Accede directamente a los listados locales para encontrar circuitos cerca de ti y planificar tus tandas de
          pitbike de asfalto.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {regionsWithProvinces.map(({ region, slug, provinces: provinceEntries }) => (
            <div key={region.id} className="rounded-2xl border border-black/10 bg-white p-5">
              <Link href={`/circuitos/${slug}`} className="text-lg text-black hover:text-black/80">
                {region.name}
              </Link>
              <div className="mt-3 flex flex-wrap gap-2">
                {provinceEntries.map(({ province, slug: provinceSlug }) => (
                  <Link
                    key={province.id}
                    href={`/circuitos/${slug}/${provinceSlug}`}
                    className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/60 hover:border-black/20"
                  >
                    {province.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <Suspense
          fallback={Array.from({ length: 6 }, (_, index) => (
            <CircuitCardSkeleton key={`skeleton-${index}`} />
          ))}
        >
          <CircuitList
            filters={{
              name: circuitName,
              provinceId: currentProvince?.id,
              regionId: currentRegion?.id,
            }}
          ></CircuitList>
        </Suspense>
      </section>
    </AppPage>
  );
}

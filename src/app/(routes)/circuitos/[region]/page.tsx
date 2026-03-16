import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { CircuitFilters } from "@/app/circuits/ui/components/CircuitFilters";
import { CircuitList } from "@/app/circuits/ui/components/CircuitList";
import { CircuitCardSkeleton } from "@/app/circuits/ui/components/CircuitCardSkeleton";
import { findRegions } from "@/app/common/ui/actions/findRegions";
import { findProvinces } from "@/app/common/ui/actions/findProvinces";
import { findCircuits } from "@/app/circuits/ui/actions/findCircuits";
import { findRegionBySlug, getProvinceSlug, getRegionSlug } from "@/app/circuits/utils/locationSlugs";
import { permanentRedirect } from "next/navigation";

type RegionPageProps = {
  params: { region: string };
  searchParams?: {
    nombre?: string;
  };
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params, searchParams }: RegionPageProps): Promise<Metadata> {
  const regions = await findRegions();
  const currentRegion = findRegionBySlug(regions, params.region);
  if (!currentRegion) {
    return { title: "Region no encontrada" };
  }
  const hasFilters = Boolean(searchParams?.nombre);
  const title = `Circuitos de pitbike de asfalto en ${currentRegion.name} - pistas y fichas`;
  const description = `Descubre circuitos de pitbike de asfalto en ${currentRegion.name}. Listado completo con ubicacion, tarifas y detalles tecnicos para rodar en tu zona.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/circuitos/${params.region}`,
    },
    robots: hasFilters ? { index: false, follow: true } : undefined,
  };
}

export default async function CircuitRegionPage({ params, searchParams }: RegionPageProps) {
  const regions = await findRegions();
  const provinces = await findProvinces();
  const currentRegion = findRegionBySlug(regions, params.region);

  if (!currentRegion) {
    const circuits = await findCircuits({ nameUrl: params.region });
    if (circuits.length > 0) {
      permanentRedirect(`/circuitos/pista/${circuits[0].nameUrl}`);
    }
    notFound();
  }

  const regionSlug = getRegionSlug(currentRegion);
  const provincesForRegion = provinces
    .filter((province) => province.regionId === currentRegion.id)
    .sort((a, b) => a.name.localeCompare(b.name, "es"));

  const circuitName = searchParams?.nombre ?? undefined;

  return (
    <AppPage>
      <section className="rounded-2xl border border-black/10 bg-white p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">Circuitos por region</p>
        <h1 className="mt-3 text-4xl text-black">Circuitos de pitbike de asfalto en {currentRegion.name}</h1>
        <p className="mt-3 max-w-3xl text-base text-black/60">
          Encuentra circuitos de pitbike de asfalto en {currentRegion.name}. Filtra por provincia o busca por nombre
          para preparar tu proxima tanda con informacion clara y actualizada.
        </p>
      </section>

      <section className="mt-6 rounded-2xl border border-black/10 bg-white p-4 md:p-6">
        <CircuitFilters
          provinces={provinces}
          currentProvince={undefined}
          regions={regions}
          currentRegion={currentRegion}
        />
      </section>

      <section className="mt-8 rounded-2xl border border-black/10 bg-white p-6">
        <h2 className="text-2xl text-black">Provincias de {currentRegion.name}</h2>
        <p className="mt-2 text-sm text-black/60">
          Selecciona tu provincia para ver circuitos de pitbike de asfalto en un listado local.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {provincesForRegion.map((province) => (
            <Link
              key={province.id}
              href={`/circuitos/${regionSlug}/${getProvinceSlug(province)}`}
              className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/60 hover:border-black/20"
            >
              {province.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <Suspense
          fallback={Array.from({ length: 6 }, (_, index) => (
            <CircuitCardSkeleton key={`region-skeleton-${index}`} />
          ))}
        >
          <CircuitList
            filters={{
              name: circuitName,
              provinceId: undefined,
              regionId: currentRegion.id,
            }}
          />
        </Suspense>
      </section>
    </AppPage>
  );
}

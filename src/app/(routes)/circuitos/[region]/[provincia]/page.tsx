import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { CircuitFilters } from "@/app/circuits/ui/components/CircuitFilters";
import { CircuitList } from "@/app/circuits/ui/components/CircuitList";
import { CircuitCardSkeleton } from "@/app/circuits/ui/components/CircuitCardSkeleton";
import { findRegionBySlug, findProvinceBySlug, findProvinceByRegionId, circuitRegions } from "@/lib/circuits-data";

type ProvincePageProps = {
  params: { region: string; provincia: string };
  searchParams?: {
    nombre?: string;
  };
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params, searchParams }: ProvincePageProps): Promise<Metadata> {
  const currentRegion = findRegionBySlug(params.region);
  if (!currentRegion) {
    return { title: "Region no encontrada" };
  }
  const currentProvince = findProvinceBySlug(params.provincia);
  if (!currentProvince || currentProvince.regionId !== currentRegion.id) {
    return { title: "Provincia no encontrada" };
  }
  const hasFilters = Boolean(searchParams?.nombre);
  const title = `Circuitos de pitbike de asfalto en ${currentProvince.name} (${currentRegion.name})`;
  const description = `Listado de circuitos de pitbike de asfalto en ${currentProvince.name}, ${currentRegion.name}. Encuentra pistas con horarios, tarifas y detalles tecnicos para rodar.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/circuitos/${params.region}/${params.provincia}`,
    },
    robots: hasFilters ? { index: false, follow: true } : undefined,
  };
}

export default async function CircuitProvincePage({ params, searchParams }: ProvincePageProps) {
  const currentRegion = findRegionBySlug(params.region);
  const currentProvince = findProvinceBySlug(params.provincia);

  if (!currentRegion || !currentProvince || currentProvince.regionId !== currentRegion.id) {
    notFound();
  }

  const provincesForRegion = findProvinceByRegionId(currentRegion.id).sort((a, b) =>
    a.name.localeCompare(b.name, "es"),
  );

  const circuitName = searchParams?.nombre ?? undefined;

  return (
    <AppPage>
      <section className="rounded-2xl border border-black/10 bg-white p-8">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">Circuitos por provincia</p>
        <h1 className="mt-3 text-4xl text-black">Circuitos de pitbike de asfalto en {currentProvince.name}</h1>
        <p className="mt-3 max-w-3xl text-base text-black/60">
          Descubre circuitos de pitbike de asfalto en {currentProvince.name}, {currentRegion.name}. Consulta fichas con
          ubicacion, precios y detalles tecnicos para rodar con seguridad.
        </p>
        <div className="mt-4">
          <Link href={`/circuitos/${currentRegion.urlName}`} className="text-sm text-black/60 hover:text-black/80">
            Ver todas las provincias de {currentRegion.name}
          </Link>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-black/10 bg-white p-4 md:p-6">
        <CircuitFilters
          provinces={provincesForRegion}
          currentProvince={provincesForRegion.find((p) => p.id === currentProvince?.id)}
          regions={circuitRegions}
          currentRegion={circuitRegions.find((r) => r.id === currentRegion?.id)}
        />
      </section>

      <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <Suspense
          fallback={Array.from({ length: 6 }, (_, index) => (
            <CircuitCardSkeleton key={`province-skeleton-${index}`} />
          ))}
        >
          <CircuitList
            filters={{
              name: circuitName,
              provinceId: currentProvince.id,
              regionId: currentRegion.id,
            }}
          />
        </Suspense>
      </section>
    </AppPage>
  );
}

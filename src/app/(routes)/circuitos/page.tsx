import { CircuitCardSkeleton } from "@/app/circuits/ui/components/CircuitCardSkeleton";
import { CircuitFilters } from "@/app/circuits/ui/components/CircuitFilters";
import { CircuitList } from "@/app/circuits/ui/components/CircuitList";
import { Province } from "@/app/common/domain/types/Province";
import { Region } from "@/app/common/domain/types/Region";
import { findProvinces } from "@/app/common/ui/actions/findProvinces";
import { findRegions } from "@/app/common/ui/actions/findRegions";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { ReportComponent } from "@/app/common/ui/components/ReportComponent";
import { Metadata } from "next";
import { Suspense } from "react";

type CircuitsPageProps = {
  searchParams?: {
    nombre?: string;
    provincia: string;
  };
};

export async function generateMetadata({
  searchParams,
}: CircuitsPageProps): Promise<Metadata> {
  const urlSearchParams = new URLSearchParams(searchParams);
  const provinceName = urlSearchParams.get("provincia") ?? "";

  let title =
    "Circuitos de Pitbike en España - encuentra pistas por provincia y nombre";
  let description =
    "Explora los mejores circuitos de pitbike de asfalto en España. Busca por nombre o provincia para encontrar la pista perfecta para rodar con tu pitbike. Toda la información que necesitas sobre circuitos cerca de ti.";

  if (provinceName) {
    title = `Circuitos de Pitbike en ${provinceName} - encuentra circuitos de asfalto para pitbikes`;
    description = `Descubre los mejores circuitos de pitbike de asfalto en la provincia de ${provinceName}. Información completa sobre pistas para rodar en pitbike. ¡Encuentra tu circuito más cercano!`;
  }

  return {
    title,
    description,
  };
}

export default async function CircuitsPage({
  searchParams,
}: CircuitsPageProps) {
  const urlSearchParams = new URLSearchParams(searchParams);
  const circuitName = urlSearchParams.get("nombre") ?? undefined;
  const provinceName = urlSearchParams.get("provincia") ?? "";
  const regionName = urlSearchParams.get("region") ?? "";

  const provinces = await findProvinces();
  const regions = await findRegions();
  const currentProvince = Province.findProvinceBy(
    "urlName",
    provinceName,
    provinces
  );
  const currentRegion = Region.findRegionBy(
    "urlName",
    regionName,
    regions
  );

  return (
    <AppPage>
      <>
        <div className="flex gap-6 relative items-center">
          <CircuitFilters provinces={provinces} currentProvince={currentProvince} regions={regions} currentRegion={currentRegion} />
          <ReportComponent
            title="¿Falta algún circuito? Añádelo!"
            url="https://forms.gle/6KwW4BNpQ1DnZ6AM6"
          />
        </div>
        <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-8">
          <Suspense fallback={Array(6).fill(<CircuitCardSkeleton />)}>
            <CircuitList
              filters={{
                name: circuitName,
                provinceId: currentProvince?.id,
                regionId: currentRegion?.id
              }}
            ></CircuitList>
          </Suspense>
        </div>
      </>
    </AppPage>
  );
}

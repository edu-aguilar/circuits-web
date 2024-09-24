import { CircuitCardSkeleton } from "@/app/circuits/ui/components/CircuitCardSkeleton";
import { CircuitList } from "@/app/circuits/ui/components/CircuitList";
import { CircuitProvinceSelector } from "@/app/circuits/ui/components/CircuitProvinceSelector";
import { CircuitSearchInput } from "@/app/circuits/ui/components/CircuitSearchInput";
import { Province } from "@/app/common/domain/types/Province";
import { findProvinces } from "@/app/common/ui/actions/findProvinces";
import { AppPage } from "@/app/common/ui/components/AppPage";
import { ReportComponent } from "@/app/common/ui/components/ReportComponent";
import { Suspense } from "react";

export default async function CircuitsPage({
  searchParams,
}: {
  searchParams?: {
    nombre?: string;
    provincia?: string;
  };
}) {
  const urlSearchParams = new URLSearchParams(searchParams);
  const circuitName = urlSearchParams.get("nombre") ?? undefined;
  const provinceName = urlSearchParams.get("provincia") ?? "";
  const provinces = await findProvinces();
  const currentProvince = Province.findProvinceBy(
    "urlName",
    provinceName,
    provinces
  );

  return (
    <AppPage>
      <>
        <ReportComponent url="https://forms.gle/6KwW4BNpQ1DnZ6AM6" />
        <div className="flex gap-6">
          <CircuitProvinceSelector
            provinces={provinces}
            currentProvince={currentProvince}
          />
          <CircuitSearchInput></CircuitSearchInput>
        </div>
        <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-8">
          <Suspense fallback={Array(6).fill(<CircuitCardSkeleton />)}>
            <CircuitList
              filters={{
                name: circuitName,
                provinceId: currentProvince?.id,
              }}
            ></CircuitList>
          </Suspense>
        </div>
      </>
    </AppPage>
  );
}

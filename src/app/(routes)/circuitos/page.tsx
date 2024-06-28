import { findCircuits } from "@/app/circuits/ui/actions/findCircuits";
import { CircuitCard } from "@/app/circuits/ui/components/CircuitCard";
import { CircuitProvinceSelector } from "@/app/circuits/ui/components/CircuitProvinceSelector";
import { CircuitSearchInput } from "@/app/circuits/ui/components/CircuitSearchInput";
import { Province } from "@/app/common/domain/types/Province";
import { findProvinces } from "@/app/common/ui/actions/findProvinces";
import { AppPage } from "@/app/common/ui/components/AppPage";

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

  const circuits = await findCircuits({
    name: circuitName,
    provinceId: currentProvince?.id,
  });

  return (
    <AppPage>
      <div className="max-w-5xl m-auto">
        <div className="flex gap-6">
          <CircuitProvinceSelector
            provinces={provinces}
            currentProvince={currentProvince}
          />
          <CircuitSearchInput></CircuitSearchInput>
        </div>
        <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-8">
          {circuits.map((circuit) => {
            return (
              <CircuitCard key={circuit.id} circuit={circuit}></CircuitCard>
            );
          })}
        </div>
      </div>
    </AppPage>
  );
}

"use client";

import { ProvinceData } from "@/app/common/domain/types/Province";
import { CircuitProvinceSelector } from "./CircuitProvinceSelector";
import { CircuitSearchInput } from "./CircuitSearchInput";
import { RegionData } from "@/app/common/domain/types/Region";
import { CircuitRegionSelector } from "./CircuitRegionSelector";

interface CircuitFiltersProps {
  provinces: ProvinceData[];
  currentProvince?: ProvinceData;
  regions: RegionData[];
  currentRegion?: RegionData;
}

export const CircuitFilters = ({ provinces, currentProvince, regions, currentRegion }: CircuitFiltersProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <CircuitRegionSelector regions={regions} currentRegion={currentRegion} />
      <CircuitProvinceSelector
        provinces={provinces}
        currentProvince={currentProvince}
        regions={regions}
        currentRegion={currentRegion}
      />
      <CircuitSearchInput />
    </div>
  );
};

'use client'

import { Province } from "@/app/common/domain/types/Province";
import { CircuitProvinceSelector } from "./CircuitProvinceSelector";
import { CircuitSearchInput } from "./CircuitSearchInput";
import { Region } from "@/app/common/domain/types/Region";
import { CircuitRegionSelector } from "./CircuitRegionSelector";

interface CircuitFiltersProps {
  provinces: Province[];
  currentProvince?: Province;
  regions: Region[];
  currentRegion?: Region;
}

export const CircuitFilters = ({
  provinces,
  currentProvince,
  regions,
  currentRegion
}: CircuitFiltersProps) => {
  return (
    <div className="flex gap-6 flex-col sm:flex-row grow">
      <CircuitRegionSelector regions={regions} currentRegion={currentRegion} />
      <CircuitProvinceSelector
        provinces={provinces}
        currentProvince={currentProvince}
      />
      <CircuitSearchInput />
    </div>
  );
};

"use client";

import { Region } from "@/app/common/domain/types/Region";
import { Selector } from "@/app/common/ui/components/Selector";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CircuitSearchParams } from "../CircuitSearchParams";

interface CircuitRegionSelectorProps {
  regions: Region[];
  currentRegion?: Region;
}

export const CircuitRegionSelector = ({
  regions,
  currentRegion,
}: CircuitRegionSelectorProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const [selectedRegion, setSelectedRegion] = useState<Region | null>(
    currentRegion ?? null
  );

  const handleRegionChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value !== "0") {
      const selectedRegion = Region.findRegionBy("id", value, regions);
      if (selectedRegion) {
        setSelectedRegion(selectedRegion);
        params.delete(CircuitSearchParams.province);
        params.set(CircuitSearchParams.region, selectedRegion.urlName);
      }
    } else {
      setSelectedRegion(null);
      params.delete(CircuitSearchParams.region);
    }
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <Selector
      items={regions}
      name="region"
      id="regionId"
      onChange={handleRegionChange}
      defaultValue={selectedRegion ? selectedRegion.id : "0"}
      anyValueLabel="Cualquier región"
    />
  );
};

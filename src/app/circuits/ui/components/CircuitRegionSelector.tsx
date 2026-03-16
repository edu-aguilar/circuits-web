"use client";

import { Region } from "@/app/common/domain/types/Region";
import { Selector } from "@/app/common/ui/components/Selector";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CircuitSearchParams } from "../CircuitSearchParams";
import { getRegionSlug } from "@/app/circuits/utils/locationSlugs";

interface CircuitRegionSelectorProps {
  regions: Region[];
  currentRegion?: Region;
}

export const CircuitRegionSelector = ({ regions, currentRegion }: CircuitRegionSelectorProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const [selectedRegion, setSelectedRegion] = useState<Region | null>(currentRegion ?? null);

  const handleRegionChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    const circuitName = params.get(CircuitSearchParams.name);
    params.delete(CircuitSearchParams.region);
    params.delete(CircuitSearchParams.province);

    if (value !== "0") {
      const selectedRegion = Region.findRegionBy("id", value, regions);
      if (selectedRegion) {
        setSelectedRegion(selectedRegion);
        const regionSlug = getRegionSlug(selectedRegion);
        if (circuitName) {
          params.set(CircuitSearchParams.name, circuitName);
        } else {
          params.delete(CircuitSearchParams.name);
        }
        replace(`/circuitos/${regionSlug}${params.toString() ? `?${params.toString()}` : ""}`);
        return;
      }
    } else {
      setSelectedRegion(null);
      if (circuitName) {
        params.set(CircuitSearchParams.name, circuitName);
      } else {
        params.delete(CircuitSearchParams.name);
      }
      replace(`/circuitos${params.toString() ? `?${params.toString()}` : ""}`);
      return;
    }
    replace(pathName);
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

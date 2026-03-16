"use client";

import { ProvinceData } from "@/app/common/domain/types/Province";
import { Selector } from "@/app/common/ui/components/Selector";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CircuitSearchParams } from "../CircuitSearchParams";
import { RegionData } from "@/app/common/domain/types/Region";
import { getProvinceSlug, getRegionSlug } from "@/app/circuits/utils/locationSlugs";

interface CircuitProvinceSelectorProps {
  provinces: ProvinceData[];
  currentProvince?: ProvinceData;
  regions: RegionData[];
  currentRegion?: RegionData;
}

export const CircuitProvinceSelector = ({
  provinces,
  currentProvince,
  regions,
  currentRegion,
}: CircuitProvinceSelectorProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const [selectedProvince, setSelectedProvince] = useState<ProvinceData | null>(currentProvince ?? null);

  const handleProvinceChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    const circuitName = params.get(CircuitSearchParams.name);
    params.delete(CircuitSearchParams.province);
    params.delete(CircuitSearchParams.region);

    if (value !== "0") {
      const selectedProvince = provinces.find((p) => p.id === value);
      if (selectedProvince) {
        setSelectedProvince(selectedProvince);
        const region = regions.find((r) => r.id === selectedProvince.regionId);
        const regionSlug = region ? getRegionSlug(region) : "";
        const provinceSlug = getProvinceSlug(selectedProvince);
        if (circuitName) {
          params.set(CircuitSearchParams.name, circuitName);
        } else {
          params.delete(CircuitSearchParams.name);
        }
        if (regionSlug) {
          replace(`/circuitos/${regionSlug}/${provinceSlug}${params.toString() ? `?${params.toString()}` : ""}`);
          return;
        }
      }
    } else {
      setSelectedProvince(null);
      if (circuitName) {
        params.set(CircuitSearchParams.name, circuitName);
      } else {
        params.delete(CircuitSearchParams.name);
      }
      if (currentRegion) {
        const regionSlug = getRegionSlug(currentRegion);
        replace(`/circuitos/${regionSlug}${params.toString() ? `?${params.toString()}` : ""}`);
        return;
      }
      replace(`/circuitos${params.toString() ? `?${params.toString()}` : ""}`);
      return;
    }
    replace(pathName);
  };

  return (
    <Selector
      items={provinces}
      name="province"
      id="provinceId"
      onChange={handleProvinceChange}
      defaultValue={selectedProvince ? selectedProvince.id : "0"}
      anyValueLabel="Cualquier provincia"
    />
  );
};

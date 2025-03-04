"use client";

import { Province } from "@/app/common/domain/types/Province";
import { Region } from "@/app/common/domain/types/Region";
import { Selector } from "@/app/common/ui/components/Selector";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CircuitSearchParams } from "../CircuitSearchParams";

interface CircuitProvinceSelectorProps {
  regions: Region[];
  provinces: Province[];
  currentProvince?: Province;
}

export const CircuitProvinceSelector = ({
  regions,
  provinces,
  currentProvince,
}: CircuitProvinceSelectorProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const [selectedProvince, setSelectedProvince] = useState<Province | null>(
    currentProvince ?? null
  );

  const handleProvinceChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value !== "0") {
      const selectedProvince = Province.findProvinceBy("id", value, provinces);
      if (selectedProvince) {
        setSelectedProvince(selectedProvince);
        params.set(CircuitSearchParams.province, selectedProvince.urlName);
      }
    } else {
      setSelectedProvince(null);
      params.delete(CircuitSearchParams.province);
    }
    console.log(params.toString());
    
    replace(`${pathName}?${params.toString()}`);
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

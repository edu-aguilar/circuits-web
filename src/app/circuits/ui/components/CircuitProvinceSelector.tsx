"use client";

import { Province } from "@/app/common/domain/types/Province";
import { Selector } from "@/app/common/ui/components/Selector";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CircuitProvinceSelectorProps {
  provinces: Province[];
}

export const CircuitProvinceSelector = ({
  provinces,
}: CircuitProvinceSelectorProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const provinceName = searchParams.get("provincia")?.toString();

  const [selectedProvince, setSelectedProvince] = useState<Province | null>(
    Province.findProvinceBy("name", provinceName ?? "", provinces) ?? null
  );

  const handleProvinceChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value !== "0") {
      const selectedProvince = Province.findProvinceBy("id", value, provinces);
      if (selectedProvince) {
        setSelectedProvince(selectedProvince);
        params.set("provincia", selectedProvince.name);
      }
    } else {
      setSelectedProvince(null);
      params.delete("provincia");
    }
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <Selector
      items={provinces}
      onChange={handleProvinceChange}
      defaultValue={selectedProvince ? selectedProvince.id : "0"}
    />
  );
};

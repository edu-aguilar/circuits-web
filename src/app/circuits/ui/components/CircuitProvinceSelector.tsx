"use client";

import { Province } from "@/app/common/domain/types/Province";
import { Selector } from "@/app/common/ui/components/Selector";
import { removeAccents } from "@/app/utils/removeAccents";
import { Flex, Select } from "@radix-ui/themes";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CircuitProvinceSelectorProps {
  provinces: Province[];
  currentProvince?: Province;
}

export const CircuitProvinceSelector = ({
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
        params.set("provincia", selectedProvince.urlName);
      }
    } else {
      setSelectedProvince(null);
      params.delete("provincia");
    }
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <>
      <Selector
        items={provinces}
        name="province"
        id="provinceId"
        onChange={handleProvinceChange}
        defaultValue={selectedProvince ? selectedProvince.id : "0"}
        anyValueLabel="Cualquier provincia"
      />
      <div className="flex flex-col w-32">
        <Select.Root
          size="3"
          defaultValue={selectedProvince ? selectedProvince.id : "0"}
          onValueChange={handleProvinceChange}
        >
          <Select.Trigger />
          <Select.Content>
            <Select.Group>
              <Select.Item value="0">Cualquier Provincia</Select.Item>
              {provinces.map((province) => (
                <Select.Item key={province.id} value={province.id}>
                  {province.name}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
    </>
  );
};

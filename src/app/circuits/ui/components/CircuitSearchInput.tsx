"use client";

import { SearchInput } from "@/app/common/ui/components/SearchInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const CircuitSearchInput = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const circuitName = searchParams.get("nombre")?.toString();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("nombre", value);
    } else {
      params.delete("nombre");
    }
    replace(`${pathName}?${params.toString()}`);
  }, 400);

  return (
    <div className="relative flex">
      <SearchInput
        onChange={handleSearch}
        defaultValue={circuitName}
      ></SearchInput>
    </div>
  );
};

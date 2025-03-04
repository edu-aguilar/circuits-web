"use client";

import { SearchInput } from "@/app/common/ui/components/SearchInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { CircuitSearchParams } from "../CircuitSearchParams";

export const CircuitSearchInput = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const circuitName = searchParams.get(CircuitSearchParams.name)?.toString();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(CircuitSearchParams.name, value);
    } else {
      params.delete(CircuitSearchParams.name);
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

"use client";

import { SearchInput } from "@/app/common/ui/components/SearchInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const CircuitFilters = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const circuitName = searchParams.get("name")?.toString();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("name", value);
    } else {
      params.delete("name");
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

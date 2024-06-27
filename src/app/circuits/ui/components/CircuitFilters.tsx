"use client";

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
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        className="peer block w-[100] rounded-md border border-gray-200 py-[9x] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder="Busca circuito"
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
        defaultValue={circuitName}
      />
    </div>
  );
};

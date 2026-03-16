interface SearchInputProps {
  minChars?: number;
  defaultValue?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({
  defaultValue = "",
  minChars = 2,
  placeholder = "Buscar circuito",
  onChange,
}: SearchInputProps) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
        <svg
          className="h-4 w-4 text-black/40"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="search"
        className="block w-full rounded-xl border border-black/10 bg-white px-4 py-3 ps-11 text-sm text-black/80 transition focus:border-black/20 focus:outline-none focus:ring-2 focus:ring-[rgba(0,0,0,0.08)]"
        placeholder={placeholder}
        onChange={(event) => {
          const value = event.target.value;
          if (value.length > minChars || value.length === 0) {
            onChange(value);
          }
        }}
        defaultValue={defaultValue}
      />
    </div>
  );
};

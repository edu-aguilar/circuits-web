"use client";

interface Item {
  id: string;
  name: string;
}

interface SelectorProps<T extends Item> {
  items: T[];
  name: string;
  id?: string;
  onChange: (value: string) => void;
  defaultValue?: string;
  anyValueLabel?: string;
}

export function Selector<T extends Item>({
  items,
  name,
  id,
  onChange,
  defaultValue = "0",
  anyValueLabel = "any option",
}: SelectorProps<T>) {
  return (
    <select
      name={name}
      id={id}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      defaultValue={defaultValue}
      className="block w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 transition focus:border-black/20 focus:outline-none focus:ring-2 focus:ring-[rgba(0,0,0,0.08)]"
    >
      <option value="0">{anyValueLabel}</option>
      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

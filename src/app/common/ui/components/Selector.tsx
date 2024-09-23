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
      className="block p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
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

"use client";

interface Item {
  id: string;
  name: string;
}

interface SelectorProps<T extends Item> {
  items: T[];
  onChange: (value: string) => void;
  defaultValue?: string;
}

export function Selector<T extends Item>({
  items,
  onChange,
  defaultValue = "0",
}: SelectorProps<T>) {
  console.log(defaultValue);

  return (
    <select
      name="province"
      id="provinceId"
      onChange={(event) => {
        onChange(event.target.value);
      }}
      defaultValue={defaultValue}
      className="block p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="0">Cualquier provincia</option>
      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

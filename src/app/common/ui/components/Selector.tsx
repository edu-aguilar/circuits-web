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
  return (
    <select
      name="province"
      id="provinceId"
      onChange={(event) => {
        onChange(event.target.value);
      }}
      defaultValue={defaultValue}
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

import { removeAccents } from "@/app/utils/removeAccents";

interface ProvinceConstructor {
  id: string;
  name: string;
  urlName: string;
}

export class Province {
  readonly id;
  readonly name;
  readonly urlName;

  constructor(province: ProvinceConstructor) {
    this.id = province.id;
    this.name = province.name;
    this.urlName = province.urlName;
  }

  static findProvinceBy = <K extends keyof Province>(
    key: K,
    value: Province[K],
    provinces: Province[]
  ): Province | undefined => {
    return provinces.find((province) => province[key] === value);
  };
}

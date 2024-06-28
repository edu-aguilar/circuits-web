interface ProvinceConstructor {
  id: string;
  name: string;
}

export class Province {
  readonly id;
  readonly name;

  constructor(province: ProvinceConstructor) {
    this.id = province.id;
    this.name = province.name;
  }

  static findProvinceBy = <K extends keyof Province>(
    key: K,
    value: Province[K],
    provinces: Province[]
  ): Province | undefined => {
    return provinces.find((province) => province[key] === value);
  };
}

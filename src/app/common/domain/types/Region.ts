interface RegionConstructor {
  id: string;
  name: string;
  urlName: string;
}

export class Region {
  readonly id;
  readonly name;
  readonly urlName;

  constructor(region: RegionConstructor) {
    this.id = region.id;
    this.name = region.name;
    this.urlName = region.urlName;
  }

  static findRegionBy = <K extends keyof Region>(key: K, value: Region[K], regions: Region[]): Region | undefined => {
    return regions.find((region) => region[key] === value);
  };
}

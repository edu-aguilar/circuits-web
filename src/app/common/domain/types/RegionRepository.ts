import { Region } from "./Region";

export interface RegionRepository {
  getRegions(): Promise<Region[]>;
}

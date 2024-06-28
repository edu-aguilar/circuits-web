import { Province } from "./Province";

export interface ProvinceRepository {
  getProvinces(): Promise<Province[]>;
}

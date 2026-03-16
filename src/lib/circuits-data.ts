import { RegionData } from "@/app/common/domain/types/Region";
import { ProvinceData } from "@/app/common/domain/types/Province";
import { regions, provinces } from "./circuits-locations.js";

export const findRegionBySlug = (slug: string): RegionData | undefined => {
  const region = regions.find((r) => r.slug === slug);
  return region ? { id: region.id, name: region.name, urlName: region.slug } : undefined;
};

export const findProvinceBySlug = (slug: string): ProvinceData | undefined => {
  const province = provinces.find((p) => p.slug === slug);
  return province
    ? { id: province.id, name: province.name, urlName: province.slug, regionId: province.regionId }
    : undefined;
};

export const findProvinceByRegionId = (regionId: string): ProvinceData[] => {
  return provinces
    .filter((p) => p.regionId === regionId)
    .map((p) => ({ id: p.id, name: p.name, urlName: p.slug, regionId: p.regionId }));
};

export const circuitRegions: RegionData[] = regions.map((r) => ({ id: r.id, name: r.name, urlName: r.slug }));
export const circuitProvinces: ProvinceData[] = provinces.map((p) => ({
  id: p.id,
  name: p.name,
  urlName: p.slug,
  regionId: p.regionId,
}));

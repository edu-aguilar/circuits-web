import { removeAccents } from "@/app/utils/removeAccents";
import { ProvinceData } from "@/app/common/domain/types/Province";
import { RegionData } from "@/app/common/domain/types/Region";

export const slugifyLocation = (value: string) => {
  return removeAccents(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export const getRegionSlug = (region: RegionData) => slugifyLocation(region.name);

export const getProvinceSlug = (province: ProvinceData) => slugifyLocation(province.name);

export const findRegionBySlug = (regions: RegionData[], slug: string) =>
  regions.find((region) => getRegionSlug(region) === slug);

export const findProvinceBySlug = (provinces: ProvinceData[], slug: string) =>
  provinces.find((province) => getProvinceSlug(province) === slug);

export const groupProvincesByRegion = (regions: RegionData[], provinces: ProvinceData[]) => {
  return regions
    .map((region) => {
      const regionSlug = getRegionSlug(region);
      const regionProvinces = provinces
        .filter((province) => province.regionId === region.id)
        .map((province) => ({
          province,
          slug: getProvinceSlug(province),
        }))
        .sort((a, b) => a.province.name.localeCompare(b.province.name, "es"));

      return {
        region,
        slug: regionSlug,
        provinces: regionProvinces,
      };
    })
    .sort((a, b) => a.region.name.localeCompare(b.region.name, "es"));
};

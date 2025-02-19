import { ApiService } from "@/app/common/infra/services/CircuitsApiService";
import { ApiPaginatedResponse } from "@/app/common/infra/types/ApiPaginatedResponse";
import { RegionApi } from "../types/RegionApi";
import { Region } from "../../domain/types/Region";
import { removeAccents } from "@/app/utils/removeAccents";

export class RegionRepository {
  private readonly apiService;

  constructor(_apiService = ApiService.getInstance()) {
    this.apiService = _apiService;
  }

  public async getRegions(): Promise<Region[]> {
    try {
      const url = this.apiService.getUri({ url: "/regions" });

      const { data } = await this.apiService.get<
        ApiPaginatedResponse<RegionApi>
      >(url);

      return this.transformToRegion(data);
    } catch (error) {
      console.error("Error fetching regions:", error);
      throw error;
    }
  }

  private transformToRegion(
    response: ApiPaginatedResponse<RegionApi>
  ): Region[] {
    return response.data.map((regionApi) => ({
      id: regionApi._id,
      name: regionApi.name,
      urlName: removeAccents(regionApi.name),
    }));
  }
}

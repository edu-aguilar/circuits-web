import { ApiService } from "@/app/common/infra/services/CircuitsApiService";
import { ApiPaginatedResponse } from "@/app/common/infra/types/ApiPaginatedResponse";
import { ProvinceApi } from "../types/ProvinceApi";
import { Province } from "../../domain/types/Province";

export class ProvinceRepository {
  private readonly apiService;

  constructor(_apiService = ApiService.getInstance()) {
    this.apiService = _apiService;
  }

  public async getProvinces(): Promise<Province[]> {
    try {
      const url = this.apiService.getUri({ url: "/provinces" });

      const { data } = await this.apiService.get<
        ApiPaginatedResponse<ProvinceApi>
      >(url);

      return this.transformToProvince(data);
    } catch (error) {
      console.error("Error fetching provinces:", error);
      throw error;
    }
  }

  private transformToProvince(
    response: ApiPaginatedResponse<ProvinceApi>
  ): Province[] {
    return response.data.map((provinceApi) => ({
      id: provinceApi._id,
      name: provinceApi.name,
    }));
  }
}

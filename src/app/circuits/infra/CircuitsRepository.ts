import { ApiService } from "@/app/common/infra/services/CircuitsApiService";
import { Circuit } from "../domain/entities/Circuit";
import { CircuitApi } from "./types/CircuitApi";
import { ApiPaginatedResponse } from "@/app/common/infra/types/ApiPaginatedResponse";
import { CircuitFilterQuery } from "../domain/types/CircuitFilterQuery";

export class CircuitsRepository {
  private readonly apiService;

  constructor(_apiService = ApiService.getInstance()) {
    this.apiService = _apiService;
  }

  public async getCircuits(filters?: CircuitFilterQuery): Promise<Circuit[]> {
    try {
      const url = this.apiService.getUri({ url: "/circuits", params: filters });

      console.log(url);

      const { data } = await this.apiService.get<
        ApiPaginatedResponse<CircuitApi>
      >(url);

      return this.transformToCircuit(data);
    } catch (error) {
      console.error("Error fetching circuits:", error);
      throw error;
    }
  }

  private transformToCircuit(
    response: ApiPaginatedResponse<CircuitApi>
  ): Circuit[] {
    return response.data.map(
      (circuitApi) =>
        new Circuit({
          id: circuitApi._id,
          ...circuitApi,
        })
    );
  }
}

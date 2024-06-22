import { apiService } from "@/app/common/infra/services/CircuitsApiService";
import { Circuit } from "../domain/entities/Circuit";
import { CircuitApi } from "./types/CircuitApi";
import { ApiPaginatedResponse } from "@/app/common/infra/types/ApiPaginatedResponse";

export class CircuitsRepository {
  private readonly apiService;

  constructor(_apiService = apiService) {
    this.apiService = _apiService;
  }

  public async getCircuits(): Promise<Circuit[]> {
    try {
      const { data } = await this.apiService.get<
        ApiPaginatedResponse<CircuitApi>
      >("/circuits");

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
          name: circuitApi.name,
        })
    );
  }
}

import { UseCase } from "@/app/common/domain/types/UseCase";
import { Circuit } from "../entities/Circuit";
import { CircuitsRepository } from "../types/CircuitsRepository";
import { CircuitsRepository as CircuitsRepositoryImplementation } from "../../infra/CircuitsRepository";
import { CircuitFilterQuery } from "../types/CircuitFilterQuery";

export class FindCircuitsUseCase
  implements UseCase<CircuitFilterQuery, Circuit[]>
{
  private readonly circuitsRepository: CircuitsRepository;

  constructor(circuitsRepository = new CircuitsRepositoryImplementation()) {
    this.circuitsRepository = circuitsRepository;
  }

  async execute(filters?: CircuitFilterQuery): Promise<Circuit[]> {
    return await this.circuitsRepository.getCircuits(filters);
  }
}

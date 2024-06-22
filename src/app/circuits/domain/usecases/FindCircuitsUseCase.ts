import { UseCase } from "@/app/common/domain/types/UseCase";
import { Circuit } from "../entities/Circuit";
import { CircuitsRepository } from "../types/CircuitsRepository";
import { CircuitsRepository as CircuitsRepositoryImplementation } from "../../infra/CircuitsRepository";

export class FindCircuitsUseCase implements UseCase<{}, Circuit[]> {
  private readonly circuitsRepository: CircuitsRepository;

  constructor(circuitsRepository = new CircuitsRepositoryImplementation()) {
    this.circuitsRepository = circuitsRepository;
  }

  async execute(): Promise<Circuit[]> {
    return await this.circuitsRepository.getCircuits();
  }
}

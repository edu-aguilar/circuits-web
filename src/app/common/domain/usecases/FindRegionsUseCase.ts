import { UseCase } from "@/app/common/domain/types/UseCase";
import { Region } from "../types/Region";
import { RegionRepository } from "../types/RegionRepository";
import { RegionRepository as RegionRepositoryImplementation } from "../../infra/repositories/RegionRepository";

export class FindRegionsUseCase implements UseCase<{}, Region[]> {
  private readonly regionRepository: RegionRepository;

  constructor(provinceRepository = new RegionRepositoryImplementation()) {
    this.regionRepository = provinceRepository;
  }

  async execute(): Promise<Region[]> {
    return await this.regionRepository.getRegions();
  }
}

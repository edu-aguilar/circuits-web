import { UseCase } from "@/app/common/domain/types/UseCase";
import { Province } from "../types/Province";
import { ProvinceRepository } from "../types/ProvinceRepository";
import { ProvinceRepository as ProvinceRepositoryImplementation } from "../../infra/repositories/ProvinceRepository";

export class FindProvincesUseCase implements UseCase<{}, Province[]> {
  private readonly provinceRepository: ProvinceRepository;

  constructor(provinceRepository = new ProvinceRepositoryImplementation()) {
    this.provinceRepository = provinceRepository;
  }

  async execute(): Promise<Province[]> {
    return await this.provinceRepository.getProvinces();
  }
}

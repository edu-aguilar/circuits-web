import { FindRegionsUseCase } from "../../domain/usecases/FindRegionsUseCase";

export const findRegions = async () => {
  const findRegionsUseCase = new FindRegionsUseCase();

  const regions = await findRegionsUseCase.execute();

  return regions;
};

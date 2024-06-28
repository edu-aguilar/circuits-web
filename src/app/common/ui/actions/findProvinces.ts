import { FindProvincesUseCase } from "../../domain/usecases/FindProvincesUseCase";

export const findProvinces = async () => {
  const findProvincesUseCase = new FindProvincesUseCase();

  const provinces = await findProvincesUseCase.execute();

  return provinces;
};

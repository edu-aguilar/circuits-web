import { FindCircuitsUseCase } from "../../domain/usecases/FindCircuitsUseCase";

export const findCircuits = async () => {
  const findCircuitsUseCase = new FindCircuitsUseCase();

  const circuits = await findCircuitsUseCase.execute();

  return circuits;
};

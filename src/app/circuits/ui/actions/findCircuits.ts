import { CircuitFilterQuery } from "../../domain/types/CircuitFilterQuery";
import { FindCircuitsUseCase } from "../../domain/usecases/FindCircuitsUseCase";
import { unstable_noStore as noStore } from "next/cache";

export const findCircuits = async (filters?: CircuitFilterQuery) => {
  noStore();
  const findCircuitsUseCase = new FindCircuitsUseCase();

  const circuits = await findCircuitsUseCase.execute(filters);

  return circuits;
};

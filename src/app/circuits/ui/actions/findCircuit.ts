import { notFound } from "next/navigation";
import { CircuitFilterQuery } from "../../domain/types/CircuitFilterQuery";
import { FindCircuitsUseCase } from "../../domain/usecases/FindCircuitsUseCase";

export const findCircuit = async (filters?: CircuitFilterQuery) => {
  const findCircuitsUseCase = new FindCircuitsUseCase();

  const circuits = await findCircuitsUseCase.execute(filters);

  if (circuits.length === 0) {
    notFound();
  }

  return circuits;
};

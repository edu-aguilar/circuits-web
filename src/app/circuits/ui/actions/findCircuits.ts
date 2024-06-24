import { FindCircuitsUseCase } from "../../domain/usecases/FindCircuitsUseCase";
import { unstable_noStore as noStore } from "next/cache";

export const findCircuits = async () => {
  noStore();
  const findCircuitsUseCase = new FindCircuitsUseCase();

  const circuits = await findCircuitsUseCase.execute();

  return circuits;
};

import { EmptyState } from "@/app/common/ui/components/EmptyState";
import { CircuitFilterQuery } from "../../domain/types/CircuitFilterQuery";
import { findCircuits } from "../actions/findCircuits";
import { CircuitCard } from "./CircuitCard";

interface CircuitListProps {
  filters: CircuitFilterQuery;
}

export const CircuitList = async ({ filters }: CircuitListProps) => {
  const circuits = await findCircuits({
    name: filters.name,
    provinceId: filters.provinceId,
  });

  return (
    <>
      {circuits.map((circuit) => {
        return <CircuitCard key={circuit.id} circuit={circuit}></CircuitCard>;
      })}
      {circuits.length === 0 && (
        <EmptyState title="No se han encontrado circuitos" />
      )}
    </>
  );
};

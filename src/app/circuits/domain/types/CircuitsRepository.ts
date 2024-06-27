import { Circuit } from "../entities/Circuit";
import { CircuitFilterQuery } from "./CircuitFilterQuery";

export interface CircuitsRepository {
  getCircuits(filters?: CircuitFilterQuery): Promise<Circuit[]>;
}

import { Circuit } from "../entities/Circuit";

export interface CircuitsRepository {
  getCircuits(): Promise<Circuit[]>;
}

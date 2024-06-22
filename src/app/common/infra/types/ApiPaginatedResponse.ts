export interface ApiPaginatedResponse<Entity> {
  data: Entity[];
  total: number;
}

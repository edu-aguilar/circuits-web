export interface UseCase<IQuery, IResponse> {
  execute(query?: IQuery): Promise<IResponse> | IResponse;
}

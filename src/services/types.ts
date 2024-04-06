export interface IPaginatedResponse<TData>  {
  first: number;
  items: number;
  last:number;
  next:number;
  pages: number
  prev: number | null;
  data: TData
}

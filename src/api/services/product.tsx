/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-catch */
import { Product } from "@src/models/Product";
import { axiosInstance } from "../client";
import { QueryFunctionContext, QueryKey } from "@tanstack/react-query";

type TFilter = {
  cat: string | null;
  sortBy: string | null;
};

export type SuccessResponse = {
  code: number;
  data: {
    id: number;
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
    data: Product[];
  };
  message: string;
  response: string;
};

export const ProductsQuery = (filter?: Record<string, string | null>) => ({
  queryKey: ["ProductsQuery", filter],
  queryFn: async (context: QueryFunctionContext<QueryKey, number>) =>
    getProducts(context),
});

const getProducts = async (context: QueryFunctionContext<QueryKey, number>) => {
  try {
    const { queryKey, pageParam } = context;
    const [_key, { sortBy, cat }] = queryKey as [string, TFilter];
    const sortByValue = sortBy === "DEFF" ? undefined : sortBy;
    const sortByQuery = sortByValue ? `&sort-by=${sortByValue}` : "";
    const data = await axiosInstance.post<SuccessResponse>(
      `products/all?page=${pageParam}${sortByQuery}`,
      {
        categories: cat ? [cat] : [],
      }
    );
    return data.data.data;
  } catch (error) {
    throw error;
  }
};

import { apiSlice } from "./api";

const BASE_URL = "http://localhost:8000/product";

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/search`,
        method: "POST",
        body: data,
      }),
    }),
    getProductByID: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/getProductById`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSearchMutation, useGetProductByIDMutation } = productSlice;

import { apiSlice } from "./api";

const BASE_URL = "http://localhost:8000/order";

export const orderSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/createOrder`,
        method: "POST",
        body: data,
      }),
    }),
    getOrder: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/getOrder`,
        method: "POST",
        body: data,
      }),
    }),
    getOrderById: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/getOrderById`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderByIdMutation,
  useGetOrderMutation,
} = orderSlice;

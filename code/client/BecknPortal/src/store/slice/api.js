import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({
    //since from the products slice we are injecting endpoints into this that is why there is no need for the builder to work here
  }),
});

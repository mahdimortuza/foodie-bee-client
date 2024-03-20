import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://foodie-bee-server-main.vercel.app/api/v1",
  baseUrl: "https://foodie-bee-server-main.vercel.app/api/v1",
  credentials: "include",
});

// base api
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["supply", "supplies"],
  endpoints: () => ({}),
});

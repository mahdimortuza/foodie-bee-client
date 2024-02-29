import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://foodie-bee-server.vercel.app/api/v1",
  baseUrl: "https://foodie-bee-server-main.vercel.app/api/v1",

  credentials: "include",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

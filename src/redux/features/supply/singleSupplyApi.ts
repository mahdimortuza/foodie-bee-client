import { baseApi } from "@/redux/api/baseApi";

const singleSupplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleSupply: builder.query({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSingleSupplyQuery } = singleSupplyApi;

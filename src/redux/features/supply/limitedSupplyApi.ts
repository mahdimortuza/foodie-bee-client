import { baseApi } from "@/redux/api/baseApi";

const limitedSupplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLimitedSupplies: builder.query({
      query: () => ({
        url: "/limited-supplies",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetLimitedSuppliesQuery } = limitedSupplyApi;

import { baseApi } from "@/redux/api/baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllSuppliesQuery } = supplyApi;

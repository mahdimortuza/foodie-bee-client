import { baseApi } from "@/redux/api/baseApi";

const createSupplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSupply: builder.mutation({
      query: (supplyData) => ({
        url: "/supplies",
        method: "POST",
        body: supplyData,
      }),
    }),
  }),
});
export const { useCreateSupplyMutation } = createSupplyApi;

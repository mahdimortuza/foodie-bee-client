import { baseApi } from "@/redux/api/baseApi";

const updateSupplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateSupply: builder.mutation({
      query: ({ id, supplyData }) => ({
        url: `/supplies/${id}`,
        method: "PATCH",
        body: supplyData,
      }),
    }),
  }),
});
export const { useUpdateSupplyMutation } = updateSupplyApi;

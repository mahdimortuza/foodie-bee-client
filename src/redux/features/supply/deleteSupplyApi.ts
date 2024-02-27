import { baseApi } from "@/redux/api/baseApi";

const deleteSupplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteSupply: builder.mutation({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useDeleteSupplyMutation } = deleteSupplyApi;

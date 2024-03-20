import { baseApi } from "@/redux/api/baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
        providesTags: ["supply"],
      }),
    }),

    createSupply: builder.mutation({
      query: (supplyData) => ({
        url: "/supplies",
        method: "POST",
        body: supplyData,
      }),
      invalidatesTags: ["supplies"],
    }),

    getSingleSupply: builder.query({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "GET",
        invalidatesTags: ["supplies"],
      }),
    }),
    getLimitedSupplies: builder.query({
      query: () => ({
        url: "/limited-supplies",
        method: "GET",
        invalidatesTags: ["supplies"],
      }),
    }),

    deleteSupply: builder.mutation({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supplies"],
    }),

    updateSupply: builder.mutation({
      query: (args) => ({
        url: `/supplies/${args._id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["supplies"],
    }),
  }),
});
export const {
  useGetLimitedSuppliesQuery,
  useCreateSupplyMutation,
  useDeleteSupplyMutation,
  useGetAllSuppliesQuery,
  useUpdateSupplyMutation,
  useGetSingleSupplyQuery,
} = supplyApi;

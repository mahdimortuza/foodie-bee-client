import { baseApi } from "@/redux/api/baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSupply: builder.mutation({
      query: (supplyData) => ({
        url: "/supplies",
        method: "POST",
        body: supplyData,
        providesTags: ["Supply"],
      }),
      invalidatesTags: ["Supply"],
    }),

    getAllSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
        providesTags: ["Supply"],
      }),
    }),

    getSingleSupply: builder.query({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "GET",
        providesTags: ["Supply"],
      }),
    }),
    getLimitedSupplies: builder.query({
      query: () => ({
        url: "/limited-supplies",
        method: "GET",
        providesTags: ["Supply"],
      }),
    }),

    deleteSupply: builder.mutation({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Supply"],
    }),

    updateSupply: builder.mutation({
      query: (supplyData) => ({
        url: `/supplies/${supplyData._id}`,
        method: "PATCH",
        body: supplyData,
      }),
      invalidatesTags: ["Supply"],
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

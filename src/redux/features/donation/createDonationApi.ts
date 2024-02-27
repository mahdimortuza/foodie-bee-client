import { baseApi } from "@/redux/api/baseApi";

const createDonationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDonation: builder.mutation({
      query: (DonationData) => ({
        url: "/donate",
        method: "POST",
        body: DonationData,
      }),
    }),
  }),
});
export const { useCreateDonationMutation } = createDonationApi;

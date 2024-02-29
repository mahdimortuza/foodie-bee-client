import { baseApi } from "@/redux/api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createVolunteer: builder.mutation({
      query: (volunteer) => ({
        url: "/volunteer",
        method: "POST",
        body: volunteer,
      }),
    }),
    getVolunteer: builder.query({
      query: () => ({
        url: "/volunteer",
        method: "GET",
      }),
    }),
  }),
});
export const { useCreateVolunteerMutation, useGetVolunteerQuery } =
  volunteerApi;

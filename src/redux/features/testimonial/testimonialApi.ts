import { baseApi } from "@/redux/api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTestimonial: builder.mutation({
      query: (testimonial) => ({
        url: "/testimonial",
        method: "POST",
        body: testimonial,
      }),
    }),
    getTestimonial: builder.query({
      query: () => ({
        url: "/testimonial",
        method: "GET",
      }),
    }),
  }),
});
export const { useCreateTestimonialMutation, useGetTestimonialQuery } =
  testimonialApi;

import { baseApi } from "@/redux/api/baseApi";

const communityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createComment: builder.mutation({
      query: (comment) => ({
        url: "/community",
        method: "POST",
        body: comment,
      }),
    }),
    getComments: builder.query({
      query: () => ({
        url: "/community",
        method: "GET",
      }),
    }),
  }),
});
export const { useCreateCommentMutation, useGetCommentsQuery } = communityApi;

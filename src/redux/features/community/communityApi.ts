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
  }),
});
export const { useCreateCommentMutation } = communityApi;

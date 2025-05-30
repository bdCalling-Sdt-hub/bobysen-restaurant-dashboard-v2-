/* eslint-disable @typescript-eslint/no-explicit-any */
import { tagTypes } from "../../../types/tagTypes";
import { baseApi } from "../../api/baseApi";

const restaurantsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addRestaurant: builder.mutation({
      query: (data) => ({
        url: "/restaurants",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.restaurant],
    }),
    getVendorWiseRestaurantId: builder.query({
      query: (query) => ({
        url: "/restaurants/dashboard/owner/restaurant",
        method: "GET",
        query: query,
      }),
      providesTags: [tagTypes.restaurant],
    }),
    EditRestaurant: builder.mutation({
      query: (body) => ({
        url: `/restaurants/${body?.id}`,
        method: "PATCH",
        body: body?.data,
      }),
      invalidatesTags: [tagTypes.restaurant],
    }),
    getReviews: builder.query({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.restaurant],
    }),
    updateAreview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.restaurant],
    }),
    handleChangeStatus: builder.mutation({
      query: (body) => ({
        url: `/restaurants/status/${body?.id}`,
        method: "PATCH",
        body: body?.data,
      }),
      invalidatesTags: [tagTypes.restaurant],
    }),
    DeleteFile: builder.mutation({
      query: (body) => ({
        url: `/restaurants/files/delete`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: [tagTypes.restaurant],
    }),
    getAllRestaurantForadmin: builder.query({
      query: (query: Record<string, any>) => ({
        url: "/restaurants/admin",
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.restaurant],
    }),
    getAllRestaurants: builder.query({
      query: (query: Record<string, any>) => ({
        url: "/restaurants/dashboard",
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.restaurant],
    }),
    getSingleRestaurant: builder.query({
      query: (id: string) => ({
        url: `/restaurants/owner/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.restaurant],
    }),
    insertTopRestaurantIntoDb: builder.mutation({
      query: (data) => ({
        url: `/topRestaurants`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.TopRestaurant],
    }),
    updateTopRestaurant: builder.mutation({
      query: (data) => ({
        url: `/topRestaurants/${data?.id}`,
        method: "PATCH",
        body: data.data,
      }),
      invalidatesTags: [tagTypes.TopRestaurant],
    }),
    getSingleTopRestaurant: builder.query({
      query: (id) => ({
        url: `/topRestaurants/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.TopRestaurant],
    }),

    getAllTopRestaurants: builder.query({
      query: () => ({
        url: `/topRestaurants`,
        method: "GET",
        params: { limit: "99999999" },
      }),
      providesTags: [tagTypes.TopRestaurant],
    }),
  }),
});

export const {
  useAddRestaurantMutation,
  useGetAllRestaurantsQuery,
  useEditRestaurantMutation,
  useGetSingleRestaurantQuery,
  useDeleteFileMutation,
  useGetAllRestaurantForadminQuery,
  useInsertTopRestaurantIntoDbMutation,
  useGetAllTopRestaurantsQuery,
  useUpdateTopRestaurantMutation,
  useGetSingleTopRestaurantQuery,
  useGetVendorWiseRestaurantIdQuery,
  useHandleChangeStatusMutation,
  useGetReviewsQuery,
  useUpdateAreviewMutation,
} = restaurantsApi;

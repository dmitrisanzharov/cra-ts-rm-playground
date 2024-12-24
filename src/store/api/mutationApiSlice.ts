import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const theTag = ['Post'];

export const mutationApiSlice: any = createApi({
    reducerPath: 'mutationApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/'
    }),
    tagTypes: theTag,
    endpoints: (builder: any) => {
        console.log('builder', builder);
        return {
            getAllPosts: builder.query({
                query: () => {
                    return {
                        url: 'allposts'
                    }
                },
                providesTags: theTag,
            }),
            postOnePost: builder.mutation({
                query: (obj: any) => {
                    return {
                        url: '/additem',
                        method: 'POST',
                        body: obj,
                    }
                },
                invalidatesTags: theTag,
                async onQueryStarted(arg: any, info: any) { 
                    try {
                      console.log('info', info)
                      await info.queryFulfilled
                    } catch (error) {
                      console.error('POST request failed', error)
                    }
                  },
 
            })
        }
    }
} as any);

console.log('mutationApiSlice', mutationApiSlice);;

export default mutationApiSlice; 
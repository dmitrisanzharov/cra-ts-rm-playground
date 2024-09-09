import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const postsApiSlice: any = createApi({
    reducerPath: 'postsApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/',
        prepareHeaders: (headers, {getState}) => {
            headers.set('Foo', 'my header');
            // let state = getState();
            // console.log("state in FetchBaseQuery: ", state);
            return headers;
        }
    }),
    tagTypes: ['MyTagPosts'],
    endpoints: (builder: any) => {
        return {
            getPosts: builder.query({
                query: (myArg: any) => ({
                    url: 'all-posts',
                    method: 'GET'
                }),
                providesTags: ['MyTagPosts']
            }),
            postTest: builder.mutation({
                query: (myArg: any) => {
                    return {
                        url: 'post-one',
                        method: 'POST',
                        body: myArg,
                    }
                },
                invalidatesTags: ['MyTagPosts'],
                async onQueryStarted(arg: any, info: any) { // THIS IS THE DEBUGGER CODE THAT SHOWS THE PROMISE STATE
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

console.log('postsApiSlice', postsApiSlice);

export default postsApiSlice;


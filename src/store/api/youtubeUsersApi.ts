import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const youtubeUsersApi = createApi({
    reducerPath: 'youtubeUsersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),
    tagTypes: ['MyMagicTag'],
    endpoints: (builder: any) => { 
        // console.log('builder', builder);
        return {
            getAllUsers: builder.query({
                query: () => {
                    return {
                        url: 'dummy-users'
                    }
                },
                providesTags: ['MyMagicTag']
            }),
            postNewUser: builder.mutation({
                query: (argObj: any) => {
                    return {
                        url: 'dummy-post',
                        method: 'POST',
                        body: argObj
                    }
                },
                invalidatesTags: ['MyMagicTag']
            })
        }          
    }
});

console.log('youtubeUsersApi in the usersApi file', youtubeUsersApi);

export default youtubeUsersApi;
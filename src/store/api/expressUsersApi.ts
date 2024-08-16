import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const expressUsersApi = createApi({
    reducerPath: 'expressUsersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),
    tagTypes: ['MyTag'],
    endpoints: (builder: any) => {
        console.log('builder', builder);
        return {
            getDummyUsers: builder.query({
                query: () => {
                    return {
                        url: '/dummy-users'
                    }
                },
                providesTags: ['MyTag']
            }),
            postOneUser: builder.mutation({
                query: (obj: any) => {
                    return {
                        url: '/dummy-post',
                        method: 'POST',
                        body: obj
                    }
                },
                invalidatesTags: ['MyTag']
            })
        }
    }
});

console.log('expressUsersApi in the usersApi file', expressUsersApi);

export default expressUsersApi;
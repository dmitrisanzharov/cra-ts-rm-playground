import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const expressUsersApi = createApi({
    reducerPath: 'expressUsersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),
    tagTypes: ['MyTagName'], // 1. creates a TAG
    endpoints: (builder: any) => { // QUERY
        // console.log('builder', builder);
        return {
            getDummyUsers: builder.query({
                query: () => {
                    return {
                        url: '/dummy-users'
                    }
                },
                providesTags: ['MyTagName'] // 2. attaches a TAG to GET request
            }),
            postOneUser: builder.mutation({ // MUTATION
                query: (obj: any) => {
                    return {
                        url: '/dummy-post',
                        method: 'POST',
                        body: obj
                    }
                },
                invalidatesTags: ['MyTagName'] // 3. tag is being invalidated on SUCCESS
            })
        }
    }
});

// console.log('expressUsersApi in the usersApi file', expressUsersApi);

export default expressUsersApi;
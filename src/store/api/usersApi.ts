import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => {
        return {
            getUsers: builder.query<any, void>({
                query: () => {
                    return {
                        url: '/users'
                    };
                }
            })
        };
    }
});

export default usersApi;
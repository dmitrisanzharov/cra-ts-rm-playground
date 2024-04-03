import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApiSlice = createApi({
    reducerPath: 'usersApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/users',
    }),
    endpoints: (builder: any) => {
        return {
            getAllUsers: builder.query({
                query: () => '/'
            })
        }
    }
});

export default usersApiSlice; 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApiSlice = createApi({
    reducerPath: 'usersApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/users',
    }),
    endpoints: (builder: any) => {
        // console.log('builder', builder);
        return {
            getAllUsers: builder.query({
                query: () => ({
                    url: '/'
                })
            }),
            getOneById: builder.query({
                query: (id: number) => ({
                    url: `/${id}`
                })
            })
        }
    }
});

export default usersApiSlice; 
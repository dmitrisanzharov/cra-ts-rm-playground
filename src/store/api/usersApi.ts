import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApiSlice = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/users'
    }),
    endpoints: (builder: any) => {
        console.log('builder', builder);
        return {
            getAllUsers: builder.query({
                query: () => ({url: '/'})
            }),
            getOneUserById: builder.query({
                query: (id: number) => ({url: `/${id}`})
            })
        }
    }
});

console.log('usersApiSlice in the usersApi file', usersApiSlice);

export default usersApiSlice;
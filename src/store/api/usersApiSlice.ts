import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApiSlice: any = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/users/'
    }),
    endpoints: (builder: any) => {
        console.log('builder', builder);
        return {
            getAllUsers: builder.query({
                query: (params?: any) => {
                    console.log('queryArgs', params)
                    return {
                        url: `${params.myArg}`,
                        method: 'GET',
                        params: params
                    }
                }
            }),
            getUserById: builder.query({
                query: (id: number|string) => {
                    return {
                        url: id,
                        method: 'GET'
                    }
                }
            })
        }
    }
} as any);

console.log('usersApiSlice', usersApiSlice); // export { useGetAllUsersQuery, useGetAllUsersQuery } = usersApiSlice;

export default usersApiSlice; 
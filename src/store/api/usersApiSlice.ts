import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApiSlice: any = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/users'
    }),
    endpoints: (builder: any) => {
        return {
            getAllUsers: builder.query({
                query: (params?: any) => {
                    return {
                        url: '',
                        method: 'GET',
                        params: params
                    }
                }
            })
        }
    }
} as any);

console.log('usersApiSlice', usersApiSlice);

export default usersApiSlice; 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApiSlice: any = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/users/',
        prepareHeaders: (headers: any, info: any) => {
            // console.log('headers', headers);
            // console.log('info', info);
            // const token = (info.getState()).auth.token;
            headers.set('Yo-Yo_YoYo', 'anyKey'); // Yo-Yo_yoyo
            return headers;
        }
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
                },
                transformResponse: (response: any) => {
                    return [1,2,3]
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

// console.log('usersApiSlice', usersApiSlice); // export { useGetAllUsersQuery, useGetAllUsersQuery } = usersApiSlice;

export default usersApiSlice; 
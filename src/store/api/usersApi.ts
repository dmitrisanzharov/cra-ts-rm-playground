import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApiSlice = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/users'
    }),
    endpoints: (builder: any) => {
        // console.log('builder', builder);
        return {
            getAllUsers: builder.query({
                query: () => ({url: '/'}),
                transformResponse: (response: any) => {
                    console.log('response in API', response);
                    return [...response, {foo: 'foo'}]
                }
            }),
            getOneUserById: builder.query({
                query: (params: any) => {
                    return {
                        url: '/',
                        params: params
                    }
                },
                transformResponse: (response: any) => {
                    console.log('response', response);
                    return {bar: 'bar', orig: response};
                  },
            })
        }
    }
});

console.log('usersApiSlice in the usersApi file', usersApiSlice);

export default usersApiSlice;
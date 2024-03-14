import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSliceForUsers = createApi({
    reducerPath: 'api', // does NOT seem to be relevant at all... convention to put: api into here
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/users',
    }),
    endpoints: (builder: any) => {
        console.log('builder', builder);
        return {
            getAll: builder.query({
                query: () => '/',
            }),
            getOneById: builder.query({
                query: (id: number) => `/${id}`,
            }),
        }
    },
} as any);

console.log('apiSliceForUsers', apiSliceForUsers); // this will NOT run until I added them to a Provider OR Store as middleWare ... cause nothing to run them

export const { useGetAllQuery } = apiSliceForUsers as any; 

export default apiSliceForUsers;

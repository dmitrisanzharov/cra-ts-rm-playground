import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myApiSlice = createApi({
    reducerPath: 'myApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/'
    }),
    endpoints: (builder: any) => {
        // console.log('builder', builder);
        return {
            getMyRes: builder.query({
                query: (params: any) => {
                    return {
                        url: '/test1',
                        params: params
                    }
                },
                transformResponse: (response: any) => {
                    console.log('response', response);
                    return response;
                  },
            })
        }
    }
});

// console.log('myApiSlice in file myApi', myApiSlice);

export default myApiSlice;
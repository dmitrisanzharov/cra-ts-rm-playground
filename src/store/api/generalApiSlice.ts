import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const generalApiSlice: any = createApi({
    reducerPath: 'generalApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/'
    }),
    endpoints: (builder: any) => {
        console.log('builder', builder);
        return {
            getTest: builder.query({
                query: (myArg: any) => ({
                    url: 'test1'
                }) 
            })
        }
    }
} as any);

console.log('generalApiSlice', generalApiSlice);

export default generalApiSlice;
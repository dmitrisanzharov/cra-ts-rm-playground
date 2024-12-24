import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mutationApiSlice: any = createApi({
    reducerPath: 'mutationApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/'
    }),
    endpoints: (builder: any) => {
        console.log('builder', builder);
        return {
            postOneUser: builder.mutation({
                query: (obj: any) => {
                    return {
                        url: '/rtk-post1/thisAreParamsForValue1/thisAreParamsForValue2',
                        method: 'POST',
                        body: obj,
                        params: {omgParams: 'omgParamsString'}
                    }
                }
            })
        }
    }
} as any);

console.log('mutationApiSlice', mutationApiSlice);;

export default mutationApiSlice; 
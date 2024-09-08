import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const generalApiSlice: any = createApi({
    reducerPath: 'generalApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/',
        prepareHeaders: (headers, {getState}) => {
            headers.set('Foo', 'my header');
            // let state = getState();
            // console.log("state in FetchBaseQuery: ", state);
            return headers;
        }
    }),
    tagTypes: ['MyTagName'],
    endpoints: (builder: any) => {
        // console.log('builder', builder);
        return {
            getTest: builder.query({
                query: (myArg: any) => ({
                    url: 'test1',
                    method: 'GET'
                }),
                providesTags: ['MyTagName']
            }),
            postTest: builder.mutation({
                query: (myArg: any) => {
                    return {
                        url: 'test-post1/myParamValue1/myParamValue2',
                        method: 'POST',
                        body: myArg,
                        params: { wow: true, foo: 'fooValueObj'},
                    }
                },
                invalidatesTags: ['MyTagName']
            })
        }
    }
} as any);

console.log('generalApiSlice', generalApiSlice);

export default generalApiSlice;
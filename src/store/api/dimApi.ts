import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const dimApi = createApi({
    reducerPath: 'dimApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
        prepareHeaders: (headers: any, info: any) => {
            const token = info?.getState()?.auth?.token || 'magicToken';

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            } else {
                throw new Error('not authorized');
            }

            return headers;
        }
    }),
    tagTypes: ['DimiData'],
    endpoints: (builder) => {
        console.log('builder: ', builder);

        return {
            getDimiData: builder.query<any, void>({
                query: (params: any) => {
                    return {
                        url: '/data',
                        method: 'GET',
                        params: params,
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json'
                        }
                    };
                },
                providesTags: ['DimiData']
            }),
            postOne: builder.mutation<any, void>({
                query: (args: any) => {
                    return {
                        url: '/post-one',
                        method: 'POST',
                        body: args.body,
                        params: args.params,
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json'
                        }
                    };
                },
                invalidatesTags: ['DimiData'],
                async onQueryStarted(arg: any, info: any) {
                    try {
                        console.log('info', info);
                        await info.queryFulfilled;
                    } catch (error) {
                        console.error('POST request failed', error);
                    }
                }
            })
            // postParams: builder.mutation<any, void>({
            //     query: () => {
            //         return {
            //             url: `/post-params/${Math.random()}`,
            //             method: 'POST',
            //             headers: {
            //                 'Content-Type': 'application/json',
            //                 Accept: 'application/json'
            //             }
            //         };
            //     },
            //     invalidatesTags: ['DimiData']
            // })
        };
    }
});

export default dimApi;

console.log('in apiSlice dimApi: ', dimApi);

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
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
    endpoints: (builder) => {
        console.log('builder: ', builder);

        return {
            getUsers: builder.query<any, void>({
                query: (params: any) => {
                    return {
                        url: '/users',
                        method: 'GET',
                        params: params,
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json'
                        }
                    };
                },
                transformResponse: (response: any, meta: any, arg: any) => {
                    console.log('response: ', response);
                    console.log('meta: ', meta);
                    console.log('arg: ', arg);
                    return [{ omg: 'we did it'}]
                }
            })
        };
    }
});

export default usersApi;

console.log('in apiSlice usersApi: ', usersApi);

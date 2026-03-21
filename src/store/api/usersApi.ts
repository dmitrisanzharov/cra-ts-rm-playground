import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => {
        console.log("builder: ", builder);

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
                }
            })
        };
    }
});

export default usersApi;

console.log('in apiSlice usersApi: ', usersApi);
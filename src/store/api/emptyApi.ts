import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emptyApi = createApi({
    reducerPath: 'emptyApiName',
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    endpoints: (builder: any) => ({})
}); 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const youtubeUsersApi = createApi({
    reducerPath: 'youtubeUsersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),
    tagTypes: ['MyMagicTag'],
    endpoints: (builder: any) => ({})
});

console.log('youtubeUsersApi in the usersApi file', youtubeUsersApi);

export default youtubeUsersApi;
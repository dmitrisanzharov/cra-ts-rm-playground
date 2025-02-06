import { emptyApi } from './emptyApi';

const usersApi = emptyApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => {
                return {
                    url: 'https://jsonplaceholder.typicode.com/users'
                }
            }
        })
    }),
    overrideExisting: false, // Avoid overriding existing endpoints
});

console.log('userApi', usersApi);

export default usersApi;
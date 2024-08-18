import youtubeUsersApi from './youtubeUsersApi';

const youtubeUsersApiExtended = youtubeUsersApi.injectEndpoints({
    endpoints: (builder: any) => {
        return {
            getAllUsers: builder.query({
                query: () => {
                    return {
                        url: 'dummy-users'
                    }
                },
                providesTags: ['MyMagicTag']
            }),
            postNewUser: builder.mutation({
                query: (argObj: any) => {
                    return {
                        url: 'dummy-post',
                        method: 'POST',
                        body: argObj
                    }
                },
                invalidatesTags: ['MyMagicTag']
            })
        } 
    } 
});

export default youtubeUsersApiExtended;
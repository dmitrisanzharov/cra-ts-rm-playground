import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// notes:
// every API is made up of 3 things: 1. Name; 2. baseUrl; 3. endpoints / actions... its similar to usual store, cause in usual store you have: 1. name; 2. initial state; 3. actions;  so very similar


const userApiSlice = createApi({
    reducerPath: 'userApiSlice',  /// this is just for the reducer store PATH NAME... usually called api
    baseQuery: fetchBaseQuery({ // this is used to create a BASE API url, does NOT work without it
        baseUrl: 'https://jsonplaceholder.typicode.com/users'
    }),
    extractRehydrationInfo(action: any, info: any): any{
        console.log('action', action);
        console.log('info', info);
    },
    endpoints: (builder: any) => { // every SLICE, just like normal store has 'actions' in it, only here they are ENDPOINTS function that returns an object with all the 'actions / api queries' in it
        console.log('builder', builder);
        return {  
            getAllUsers: builder.query({
                query: (arg: any) => {
                    console.log('arg', arg);
                    return { // this returns an object with all payload to api in it
                        url: '/'
                    }
                }
            }),
            getOneById: builder.query({
                query: (arg: any) => {
                    return {
                        url: arg.id,
                        // params: { myName: 'Dmitri', tel: 123 } 
                    }
                }
            })
        }
    }
});

console.log('userApiSlice', userApiSlice);

export const { useGetAllUsersQuery } = userApiSlice; 

export default userApiSlice; 
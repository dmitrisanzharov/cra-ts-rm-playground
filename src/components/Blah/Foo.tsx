import React from 'react';
import expressUsersApi from 'src/store/api/expressUsersApi';

type Props = {}

const Foo = (props: Props) => {

    const userData: any = expressUsersApi.useGetDummyUsersQuery({});
    console.log("userData: ", userData);

    const postMe = expressUsersApi.usePostOneUserMutation();
    console.log("postMe: ", postMe);

    async function postMe2(){
        console.log('postMe2 ran')
        await postMe[0]({id: 6, name: 'a'})
    }

    // React.useEffect(() => {
    //     userData.refetch()
    // }, []);



    // HTML

    if(userData.isLoading){
        return <h1>Loading...</h1>
    }



  return (
    <div>
        <h1>All users</h1>
        <ul>
            {userData?.data.map((item: any)=> {
                return <li key={item.id}>{item.name}</li>
            })}
        </ul>
        <hr />
        <button onClick={postMe2}>post</button>
    </div>
  )
}

export default Foo;
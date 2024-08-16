import React from 'react';
import expressUsersApi from 'src/store/api/expressUsersApi';

type Props = {}

const Foo = (props: Props) => {

    const [input, setInput] = React.useState('');

    const userData: any = expressUsersApi.useGetDummyUsersQuery({});
    console.log("userData: ", userData);

    const postMe = expressUsersApi.usePostOneUserMutation();
    console.log("postMe: ", postMe);

    function postMe2(){
        console.log('postMe2 ran')
        postMe[0]({id: userData.data.length + 1, name: input});
        setInput('');
    }

    // HTML

    if(userData.isLoading){
        return <h1>Loading...</h1>
    }



  return (
    <div>
        <h1>All users</h1>
        <ul>
            {userData?.data.map((item: any)=> {
                return <li key={item.id}>{JSON.stringify(item)}</li>
            })}
        </ul>
        <hr />
        <input type='text' value={input} onChange={e=> setInput(e.target.value)} />
        <button onClick={postMe2}>post</button>
    </div>
  )
}

export default Foo;
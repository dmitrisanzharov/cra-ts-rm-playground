import React from 'react'

import youtubeUsersApi from 'src/store/api/youtubeUsersApi';

type Props = {}

const Bar = (props: Props) => {

    const [inputState, setInputState] = React.useState('');

    const allData: any = youtubeUsersApi.useGetAllUsersQuery({});
    console.log("allData: ", allData);

    const postData: any = youtubeUsersApi.usePostNewUserMutation({});
    console.log("postData: ", postData);

    function handleAddPost(){
        let objectToAdd = { id: allData.data.length + 1, name: inputState};
        postData[0](objectToAdd)
        setInputState('');
    }




  return (
    <div>
        <h1>All Data in Bar</h1>
        <ul>
            {allData?.data?.map((el: any)=> {
                return <li key={el.id}>{JSON.stringify(el)}</li>
            })}
        </ul>

        <hr />
        <input type='text' value={inputState} onChange={e=> setInputState(e.target.value)} /> 
        <br />
        <button onClick={handleAddPost}>add post</button>
 
    </div>
  )
}

export default Bar
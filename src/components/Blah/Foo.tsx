import React from 'react'
import mutationApiSlice from '../../store/api/mutationApiSlice'

type Props = {}

const Foo = (props: Props) => {

    const postData = mutationApiSlice.useGetAllPostsQuery({});
    const addPost = mutationApiSlice.usePostOnePostMutation();

    const [input, setInput] = React.useState('');


    function addPostFn(){
        const toAvoidTheObjectBug = {title: input};
        addPost[0](toAvoidTheObjectBug)
        setInput('')
    }



    function manualRefetch(){
        postData.refetch()
    }

    React.useEffect(() => {
        console.log('postData', postData);
    }, [postData.status]);

    

    if(postData.isLoading){
        return <p>Loading...</p>
    }

  return (
    <div>
        <h1>type something</h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addPostFn}>add</button>
        <button onClick={manualRefetch}>refetch</button>
        <hr />
        <ul>
            {postData.data.map((item: any)=> {
                return <li key={item.id}>{JSON.stringify(item)}</li>
            })}
        </ul>
    </div>
  )
}

export default Foo
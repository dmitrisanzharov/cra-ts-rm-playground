import React from 'react';
import postsApiSlice from '../store/api/postsApiSlice';
import { useDispatch } from "react-redux";

type Props = {}

const PostsComp = (props: Props) => {

    const dispatch = useDispatch();

    const [input, setInput] = React.useState('');

    const posts = postsApiSlice.useGetPostsQuery();
    console.log("posts: ", posts);

    const postOne = postsApiSlice.usePostTestMutation();
    console.log("postOne: ", postOne);


    function handleAddPost(){
        const thePost = { id: posts?.data.length + 1, title: input };
        postOne[0](thePost);
        posts.refetch();  // OR dispatch(generalApiSlice.util.invalidateTags(['MyTagName']));
        setInput('');
    }



  return (
    <div>
        <h1>Add post</h1>
        <br />
        <input value={input} onChange={e=> setInput(e.target.value)} />
        <br />
        <button onClick={handleAddPost}>add post</button>
        <hr />
        <h1>All posts</h1>
        <ul>
            {posts?.data?.map((post: any) => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
    </div>
  )
}

export default PostsComp
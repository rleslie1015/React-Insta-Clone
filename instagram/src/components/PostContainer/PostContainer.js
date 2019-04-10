import React from 'react'
import Post from "./Post"


function PostContainer(props) {
    return (
    <div>
        {props.post.map(singlePost=>
        <Post key={singlePost.id} post={singlePost}/>)}
        
    </div>
  )
}

export default PostContainer;

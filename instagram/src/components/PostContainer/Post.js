import React from 'react'
import CommentSection from "../CommentSection/CommentSection";
function Post(props) {
 
  return (
    <div>
   <img src={props.post.thumbnailUrl} />
      {props.post.username}
    
        <CommentSection comment={props.post.comments}/>
    </div>
  )
}

export default Post

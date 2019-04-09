import React from 'react'
import SearchBar from "../SearchBar/SearchBar";
import CommentSection from "../CommentSection/CommentSection";

function Post(props) {
 
  return (
    <div>
      <SearchBar />
      <img src={props.post.thumbnailUrl} />
      {props.post.username}
      <img src={props.post.imageUrl} />
      <CommentSection comment={props.post.comments}/>
    </div>
  )
}

export default Post

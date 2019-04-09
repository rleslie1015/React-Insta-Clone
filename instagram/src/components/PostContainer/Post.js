import React from 'react'
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

function Post(props) {
 
  return (
    <div>
      <div>
        <div>
          <img className="profile-img" src={props.post.thumbnailUrl} alt="user profile" />
          {props.post.username}
        </div>
        <div>
          <img src={props.post.imageUrl} />
        </div>
        <div>
          <CommentSection comment={props.post.comments}/> 
        </div>
      </div>
    
    </div>
  )
}

export default Post

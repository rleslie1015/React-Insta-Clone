import React from 'react';
import Comment from './Comment';

function CommentSection(props) {
  return (
    <div>
    {props.comment.map(singleComment=> <Comment key={singleComment.id} comment={singleComment}/>)}
    <input type="text" />
    </div>
  )
}

export default CommentSection;

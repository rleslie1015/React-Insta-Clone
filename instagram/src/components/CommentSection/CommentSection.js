import React from 'react';
import Comment from './Comment';

class CommentSection extends React.Component {
  constructor(props){
    super(props);
    this.state={
     comment: [...props.comment]
    }
  }
  render() {
    return (
      <div>
      
      {this.state.comment.map(singleComment=> <Comment key={singleComment.id} comment={singleComment}/>)}
      <input type="text" />
      </div>
    )
  }

}

export default CommentSection;

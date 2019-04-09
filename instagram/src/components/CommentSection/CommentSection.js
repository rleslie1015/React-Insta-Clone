import React from 'react';
import Comment from './Comment';

class CommentSection extends React.Component {
  constructor(props){
    super(props);
    this.state={
     comment: [...props.comment],
     text: "",
    }
  }
  handleChange = (e)=>{
    this.setState({ text: e.target.value})
  }
  render() {
    return (
      <div>
      
      {this.state.comment.map(singleComment=> <Comment key={singleComment.id} comment={singleComment}/>)}
      <form >
        <input 
            type="text" 
            placeholder="Add Comment"
            value={this.state.text}
            onChange={this.handleChange}/>
      </form> 
        </div>
    )
  }

}

export default CommentSection;

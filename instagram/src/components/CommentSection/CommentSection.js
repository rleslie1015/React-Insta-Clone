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
  addComment = (e) => {
    e.preventDefault()
    const newComment={
      username: "NewUser",
      text: this.state.text,
    }
    this.setState({
      comment: [...this.state.comment, newComment],
      text: "",
    })
  }
  render() {
    return (
      <div>
      
      {this.state.comment.map(singleComment=> <Comment key={singleComment.id} comment={singleComment}/>)}
      <form onSubmit={this.addComment}>
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

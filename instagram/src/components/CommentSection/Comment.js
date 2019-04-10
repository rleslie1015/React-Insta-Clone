import React from 'react'
import PropTypes from 'prop-types';
function Comment(props) {
  return (
    <div>
       <strong>{props.comment.username} </strong> 
        {props.comment.text}
     
    </div>
  )
}
Comment.propTypes = {
    Comment: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
        comment: PropTypes.string,
    }))
}
export default Comment;


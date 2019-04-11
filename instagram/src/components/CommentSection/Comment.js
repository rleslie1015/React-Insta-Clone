import React from 'react'
import PropTypes from 'prop-types';
import StyledH1 from "../Styles/H1"
function Comment(props) {
  return (
    <div>
       <StyledH1 fontSize="25px" fontFamily="arial">{props.comment.username} </StyledH1> 
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


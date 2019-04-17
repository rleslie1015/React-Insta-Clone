import React from 'react'
import CommentSection from "../CommentSection/CommentSection";
import styled from "styled-components"
import StyledH1 from "../Styles/H1"
const LogoImg = styled.img`
  width: 50px;
  border-radius: 50%;
`
function Post(props) {
 
  return (
    <div>
      <div>
        <div>
          <LogoImg className="profile-img" src={props.post.thumbnailUrl} alt="user profile" />
         <StyledH1 font-weight="10px">{props.post.username} </StyledH1> 
        </div>
        <div>
          <img src={props.post.imageUrl} alt="the post"/>
          <CommentSection comment={props.post.comments}/> 
        </div>
        <div>
         
        </div>
      </div>
    
    </div>
  )
}

export default Post

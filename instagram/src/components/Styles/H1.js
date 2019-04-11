
import styled, { css } from "styled-components";

const fontFamily = "Satisfy, Cursive";
const StyledH1 = styled.h1`
    font-family: ${fontFamily};
    margin: 0 10px;
    font-weight: ${props => props.fontWeight};
    
  
`
export default StyledH1;
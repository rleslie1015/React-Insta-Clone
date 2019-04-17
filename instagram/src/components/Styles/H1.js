
import styled, { css } from "styled-components";

const fontFamily = "Satisfy, Cursive";
const StyledH1 = styled.h1`
    font-family: ${props => props.fontFamily};
    margin: 0 10px;
    font-size: ${props => props.fontSize};
    
  
`
export default StyledH1;
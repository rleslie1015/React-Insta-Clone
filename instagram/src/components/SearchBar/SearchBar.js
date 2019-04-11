import React from "react";

import styled, { css } from "styled-components";
import H1 from "../Styles/H1"

const Header = styled.div`
    display: flex;
` 
function SearchBar() {
    return (
        <Header>
            <div> <i class="fab fa-instagram fa-3x"></i></div>  
            <H1>instagram</H1>
            <div> <input type="text"></input></div>
            <div> <i class="far fa-compass fa-3x"></i></div>  
            <div><i class="far fa-heart fa-3x"></i></div>
            <div> <i class="fas fa-user fa-3x"></i> </div>
        </Header>
      
    )
}

export default SearchBar;
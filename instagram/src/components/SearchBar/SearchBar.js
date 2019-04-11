import React from "react";
import "./SearchBar.css";
import styled, { css, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    .search-bar {
    display: flex;
    }
    h1 {
        font-family: 'Satisfy', cursive;
        margin: 0 10px;
}
}`

const H1 = styled.h1`
    font-family: 'Satisfy', cursive;
    margin: 0 10px;
`
const SearchBarDiv = styled.div`
    display: flex;
` 
function SearchBar() {
    return (
        <SearchBarDiv>
            <div> <i class="fab fa-instagram fa-3x"></i></div>  
            <H1>instagram</H1>
            <div> <input type="text"></input></div>
            <div> <i class="far fa-compass fa-3x"></i></div>  
            <div><i class="far fa-heart fa-3x"></i></div>
            <div> <i class="fas fa-user fa-3x"></i> </div>
        </SearchBarDiv>
      
    )
}

export default SearchBar;
import React from "react";
import "./SearchBar.css";
function SearchBar() {
    return (
        <div className="search-bar">
            <div> <i class="fab fa-instagram fa-3x"></i></div>  
            <h1>instagram</h1>
            <div> <input type="text"></input></div>
            <div> <i class="far fa-compass fa-3x"></i></div>  
            <div><i class="far fa-heart fa-3x"></i></div>
            <div> <i class="fas fa-user fa-3x"></i> </div>
        </div>
      
    )
}

export default SearchBar;
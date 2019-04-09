import React, { Component } from 'react';
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";


import PostContainer from "./components/PostContainer/PostContainer";

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dummyData : []
    }
  }
  componentDidMount() {
    this.setState({ dummyData });
  }

    render() {

          return (
        <div className="App">
          <SearchBar />
          <PostContainer post={this.state.dummyData}/>
      
        </div>
      );
    }

  }

export default App;

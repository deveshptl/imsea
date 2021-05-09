import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import DisplayImages from './components/DisplayImages/DisplayImages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [[], [], [], []],
      query: undefined,
    };
  }

  updateImages = (images, query) => {
    this.setState({ images, query });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <SearchForm updateImages={this.updateImages} />
        <DisplayImages
          updateImages={this.updateImages}
          query={this.state.query}
          images={this.state.images}
        />
      </div>
    );
  }
}

export default App;

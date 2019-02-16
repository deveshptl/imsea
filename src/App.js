import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import DisplayImages from './components/DisplayImages/DisplayImages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
    this.updateImages = this.updateImages.bind(this);
  }

  updateImages(images) {
    this.setState(() => ({ images }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm updateImages={this.updateImages} />
        <DisplayImages images={this.state.images} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './SearchForm.css';

import getAll from '../../controllers/getAll';
import chunkify from '../../controllers/chunkify';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: undefined
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(e) {
    const query = e.target.value;
    this.setState(() => ({ query }));
  }

  handleSubmit(e) {
    e.preventDefault();
    getAll(this.state.query, 1).then(res => {
      let arr = chunkify(res, 4, true);
      this.props.updateImages(arr, this.state.query);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className='search-form-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-container'>
            <div className='search-field'>
              <input type='text' name='search' placeholder='Search photos' onChange={this.handleQueryChange} />
            </div>
            <div className='search-icon'>
              <button type='submit'><i className="fas fa-search"></i></button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchForm;
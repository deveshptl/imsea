import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {
    render() {
        return (
            <div className='search-form-container'>
                <div className='form-container'>
                    <div className='search-field'>
                        <input type='text' name='search' placeholder='Search photos' />
                    </div>
                    <div className='search-icon'>
                        <button><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchForm;
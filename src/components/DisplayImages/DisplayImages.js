import React from 'react';
import './DisplayImages.css';
import uuid from 'uuid';

import ImageCard from '../ImageCard/ImageCard';

import getAll from '../../controllers/getAll';
import chunkify from '../../controllers/chunkify';

class DisplayImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  loadNextPage = () => {
    getAll(this.props.query, this.state.page + 1)
      .then((res) => {
        this.setState({ page: this.state.page + 1 });
        this.props.updateImages(chunkify(res, 4), this.props.query);
      })
      .catch((err) => {
        alert('Something went wrong while loading the next page!', err);
      });
  };

  loadPrevPage = () => {
    getAll(this.props.query, this.state.page - 1)
      .then((res) => {
        this.setState({ page: this.state.page - 1 });
        this.props.updateImages(chunkify(res, 4), this.props.query);
      })
      .catch((err) => {
        alert('Something went wrong while loading the next page!', err);
      });
  };

  render() {
    const images01 = this.props.images[0];
    const images02 = this.props.images[1];
    const images03 = this.props.images[2];
    const images04 = this.props.images[3];
    return (
      <div className='display-images-container'>
        <div className='image-grid-container'>
          <div className='column'>
            {images01.map(
              (image) => image && <ImageCard {...image} key={uuid()} />
            )}
          </div>
          <div className='column'>
            {images02.map(
              (image) => image && <ImageCard {...image} key={uuid()} />
            )}
          </div>
          <div className='column'>
            {images03.map(
              (image) => image && <ImageCard {...image} key={uuid()} />
            )}
          </div>
          <div className='column'>
            {images04.map(
              (image) => image && <ImageCard {...image} key={uuid()} />
            )}
          </div>
        </div>
        <div className='images-navigation'>
          {(images01.length > 0 ||
            images02.length > 0 ||
            images03.length > 0 ||
            images04.length > 0) && (
            <React.Fragment>
              <button
                disabled={this.state.page === 1}
                onClick={this.loadPrevPage}
              >
                Prev
              </button>
              <button
                disabled={this.state.page === 10}
                onClick={this.loadNextPage}
              >
                Next
              </button>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default DisplayImages;

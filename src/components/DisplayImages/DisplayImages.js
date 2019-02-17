import React from 'react';
import './DisplayImages.css';

import ImageCard from '../ImageCard/ImageCard';

import getAll from '../../controllers/getAll';
import chunkify from '../../controllers/chunkify';

class DisplayImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      called: false
    }
  }

  loadNextPage = () => {
    getAll(this.props.query, this.state.page + 1).then((res) => {
      let arr = chunkify(res, 4, true);
      console.log(arr);
      let images01 = this.props.images[0]
      let images02 = this.props.images[1]
      let images03 = this.props.images[2]
      let images04 = this.props.images[3]
      images01 = images01.concat(arr[0]);
      images02 = images02.concat(arr[1]);
      images03 = images03.concat(arr[2]);
      images04 = images04.concat(arr[3]);
      console.log([images01, images02, images03, images04]);
      this.setState(() => ({ page: this.state.page + 1, called: false }));
      this.props.updateImages([images01, images02, images03, images04], this.props.query);
    });
  }

  handleScroll = () => {
    const wrap = document.getElementsByClassName('image-grid-container')[0];
    const contentHeight = wrap.offsetHeight;
    const yOffset = window.pageYOffset;
    const y = yOffset + window.innerHeight;
    if (y + 1100 >= contentHeight && !this.state.called) {
      this.setState(() => ({ called: true })); // change state back to false when contents are loaded successfully
      this.loadNextPage();
    }
  }

  componentWillMount() {
    window.onscroll = this.handleScroll;
  }

  render() {
    return (
      <div className='image-grid-container'>
        <div className='column'>
          {this.props.images[0].map((image) => (
            <ImageCard {...image} key={image.id} />
          ))}
        </div>
        <div className='column'>
          {this.props.images[1].map((image) => (
            <ImageCard {...image} key={image.id} />
          ))}
        </div>
        <div className='column'>
          {this.props.images[2].map((image) => (
            <ImageCard {...image} key={image.id} />
          ))}
        </div>
        <div className='column'>
          {this.props.images[3].map((image) => (
            <ImageCard {...image} key={image.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default DisplayImages;
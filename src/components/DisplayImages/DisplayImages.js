import React from 'react';
import './DisplayImages.css';

import ImageCard from '../ImageCard/ImageCard';

class DisplayImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      called: false
    }
  }

  handleScroll = () => {
    const wrap = document.getElementsByClassName('image-grid-container')[0];
    const contentHeight = wrap.offsetHeight;
    const yOffset = window.pageYOffset;
    const y = yOffset + window.innerHeight;
    if (y >= contentHeight && !this.state.called) {
      console.log('call again', this.state.page + 1);
      this.setState(() => ({ called: true })); // change state back to false when contents are loaded successfully
    }
  }

  componentWillMount() {
    window.onscroll = this.handleScroll;
  }

  render() {
    return (
      <div className='image-grid-container'>
        {this.props.images.map((image) => (
          <ImageCard {...image} key={image.id} />
        ))}
      </div>
    )
  }
}

export default DisplayImages;
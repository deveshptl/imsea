import React from 'react';
import './ImageCard.css';

class ImageCard extends React.Component {
  openWindow = () => {
    window.open(this.props.original, '_blank');
  }

  render() {
    return (
      <div className='image' style={{ height: `${this.props.height}` }}>
        <img src={this.props.small} alt="" />
        <button onClick={this.openWindow}><i className='fa fa-external-link-alt'></i></button>
      </div>
    )
  }
}

export default ImageCard;
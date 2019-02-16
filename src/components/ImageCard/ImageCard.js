import React from 'react';
import './ImageCard.css';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    }
    this.imageRef = React.createRef();
    this.setSpans = this.setSpans.bind(this);
  }

  setSpans() {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 4);
    this.setState(() => ({ spans }));
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  render() {
    return (
      <div className='image' style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img src={this.props.small} alt="" ref={this.imageRef} />
      </div>
    )
  }
}

export default ImageCard;
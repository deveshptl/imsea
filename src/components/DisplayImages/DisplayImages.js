import React from 'react';
import './DisplayImages.css';
import uuid from 'uuid';

import InfiniteScroll from 'react-infinite-scroll-component';

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
		getAll(this.props.query, this.state.page + 1).then((res) => {
			let arr = chunkify(res, 4, true);
			let images01 = this.props.images[0];
			let images02 = this.props.images[1];
			let images03 = this.props.images[2];
			let images04 = this.props.images[3];
			images01 = images01.concat(arr[0]);
			images02 = images02.concat(arr[1]);
			images03 = images03.concat(arr[2]);
			images04 = images04.concat(arr[3]);
			this.setState((prevState) => ({ page: prevState + 1 }));
			this.props.updateImages(
				[images01, images02, images03, images04],
				this.props.query
			);
		});
	};

	render() {
		const images01 = this.props.images[0];
		const images02 = this.props.images[1];
		const images03 = this.props.images[2];
		const images04 = this.props.images[3];
		return (
			<div className='display-images-container'>
				<InfiniteScroll
					dataLength={this.props.images[0].length}
					next={this.loadNextPage}
					hasMore
					loader={<div className='loader'>Loading...</div>}
					className='image-grid-container'
				>
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
				</InfiniteScroll>
			</div>
		);
	}
}

export default DisplayImages;

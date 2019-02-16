import keys from '../keys';

export default (query, page) => {
    return fetch(`https://pixabay.com/api/?key=${keys.PIXABAY_API}&q=${query}&per_page=10&page=${page}`, {
        method: 'get'
    }).then(res => {
        return res.json().then(res => res);
    }).then(res => {
        // console.log('PIXABAY', res.hits.length)
        return res.hits.map((image) => ({
            id: image.id,
            width: image.imageWidth,
            height: image.imageHeight,
            small: image.webformatURL,
            original: image.largeImageURL,
            imageFrom: 'pixabay'
        }));
    }).catch(err => {
        alert('Something went wrong while executing search request to unsplash api.');
        return err;
    });
}
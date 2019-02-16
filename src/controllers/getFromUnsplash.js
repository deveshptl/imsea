import keys from '../keys';

export default (query, page) => {
    return fetch(`https://api.unsplash.com/search/photos?client_id=${keys.UNSPLASH_API}&query=${query}&per_page=10&page=${page}`, {
        method: 'get'
    }).then(res => {
        return res.json().then(res => res);
    }).then(res => {
        // console.log('UNSPLASH', res.results.length);
        console.log(res);
        return res.results.map((image) => ({
            id: image.id,
            width: image.width,
            height: image.height,
            small: image.urls.small,
            original: image.urls.full,
            imageFrom: 'unsplash'
        }));
    }).catch(err => {
        alert('Something went wrong while executing search request to unsplash api.');
        return err;
    });
}
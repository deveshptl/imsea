import keys from '../keys';

export default (query, page) => {
    return fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=10&page=${page}`, {
        method: 'get',
        headers: {
            'Authorization': `${keys.PEXELS_API}`
        }
    }).then(res => {
        return res.json().then(res => res);
    }).then(res => {
        // console.log('PEXELS:', res.photos.length)
        return res.photos.map((image) => ({
            id: image.id,
            width: image.width,
            height: image.height,
            small: image.src.medium,
            original: image.src.original,
            imageFrom: 'pexels'
        }));
    }).catch(err => {
        alert('Something went wrong while executing search request to unsplash api.');
        return err;
    });
}
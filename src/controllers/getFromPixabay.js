import keys from '../keys';

export default (query, page) => {
  return fetch(
    `https://pixabay.com/api/?key=${keys.PIXABAY_API}&q=${query}&per_page=13&page=${page}`,
    {
      method: 'get',
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json().then((res) => res);
      }
      throw res;
    })
    .then((res) => {
      // console.log('PIXABAY', res.hits.length)
      return res.hits.map((image) => ({
        id: image.id,
        width: image.imageWidth,
        height: image.imageHeight,
        small: image.webformatURL,
        original: image.largeImageURL,
        imageFrom: 'pixabay',
      }));
    })
    .catch((err) => {
      console.log('PIXABAY', err);
      throw err;
    });
};

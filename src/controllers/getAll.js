import getFromUnsplash from './getFromUnsplash';
import getFromPixabay from './getFromPixabay';
import getFromPexels from './getFromPexels';

export default (query) => {
    return Promise.all([getFromPexels(query), getFromPixabay(query), getFromUnsplash(query)]).then((value) => {
        let arr = [];
        return arr.concat(...value);
    }).catch(err => {
        return err;
    });
}
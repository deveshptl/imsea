import getFromUnsplash from './getFromUnsplash';
import getFromPixabay from './getFromPixabay';
import getFromPexels from './getFromPexels';

export default (query, page) => {
    return Promise.all([getFromPexels(query, page), getFromPixabay(query, page), getFromUnsplash(query, page)]).then((value) => {
        let arr = [];
        if (value[0].toString() !== 'TypeError: Failed to fetch') {
            arr = arr.concat(value[0]);
        }
        if (value[1].toString() !== 'TypeError: Failed to fetch') {
            arr = arr.concat(value[1]);
        }
        if (value[2].toString() !== 'TypeError: Failed to fetch') {
            arr = arr.concat(value[2]);
        }
        let currentIndex = arr.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }

        return arr;
    }).catch(err => {
        return err;
    });
}
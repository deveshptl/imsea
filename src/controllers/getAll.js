import getFromUnsplash from './getFromUnsplash';
import getFromPixabay from './getFromPixabay';
import getFromPexels from './getFromPexels';

export default (query, page) => {
  return Promise.all([
    getFromPexels(query, page),
    getFromPixabay(query, page),
    getFromUnsplash(query, page),
  ])
    .then((value) => {
      let arr = [];
      arr = arr.concat(value[0]);
      arr = arr.concat(value[1]);
      arr = arr.concat(value[2]);
      return shuffle(arr);
    })
    .catch((err) => {
      throw err;
    });
};

const shuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

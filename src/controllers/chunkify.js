export default (array, numberOfDivisions) => {
  const dividedArray = [];

  for (let i = 0; i < numberOfDivisions; i++) {
    dividedArray.push([]);
  }

  let addTo = 0;

  array.forEach((value) => {
    dividedArray[addTo].push(value);
    addTo++;
    if (addTo >= numberOfDivisions) {
      addTo = 0;
    }
  });
  return dividedArray;
};

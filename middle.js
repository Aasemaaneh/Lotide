
const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    return [array[middleIndex]];
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

module.exports = middle;

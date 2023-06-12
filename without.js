
const without = function(source, itemsToRemove) {
  const newArray = [];

  for (let i = 0; i < source.length; i++) {
    let found = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      newArray.push(source[i]);
    }
  }

  return newArray;
};

module.exports = without;
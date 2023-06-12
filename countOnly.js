const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  
  for (const item in itemsToCount) {
    if (!results[item] && allItems.length !== 0) {
      results[item] = undefined;
    }
  }
  return results;
};

module.exports = countOnly;

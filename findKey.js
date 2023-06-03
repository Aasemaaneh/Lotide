const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed:  ${actual}   ===  ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed:  ${actual}  !==  ${expected}`);
    }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

// Test cases
const data = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

const result1 = findKey(data, x => x.stars === 3);
assertEqual(result1, "Akaleri");

const result2 = findKey(data, x => x.stars === 122);
assertEqual(result2, undefined);

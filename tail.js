const assertEqual = function(actual, expected) {
  if (String(actual) === String(expected)) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}   ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual}  !==  ${expected}`);
  }
};
const tail = function(array) {
  return array.slice(1);
};
//console.log(tail([1, 2, 3]));
// Test cases
assertEqual(tail([1, 2, 3]), [2, 3]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([1]), []);
assertEqual(tail([]), []);
  
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
  
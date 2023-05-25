
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed:  ${actual}   ===  ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed:  ${actual}  !==  ${expected}`);
    }
  };
const countLetters = function(input) {
    const results = {};
  
    for (const letter of input.toLowerCase()) {
        //console.log(letter);
      if (results[letter]) {
        results[letter] += 1;
        } else {
        results[letter] = 1;
        }
      
    }
  
    return results;
  };
  console.log(countLetters('LHL'));
  console.log(countLetters("lighthouse in the house"));
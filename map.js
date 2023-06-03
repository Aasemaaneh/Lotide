const assertArraysEqual = function(array1, array2) {
    if (array1.length !== array2.length) {
      console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
    } else {
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
          return;
        }
      }
      console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
    }
  };
  const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    
    return true;
  };
    
  
  const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  };
  
  // Test cases
  const words = ["ground", "control", "to", "major", "tom"];
  
  const results1 = map(words, word => word[0]);
  assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
  const results2 = map(words, word => Math.round(Math.sqrt(word.length)));
  assertArraysEqual(results2, [ 2, 3, 1, 2, 2 ]);
  const results3 = map(words, word => word.toUpperCase() + " : " + word);
  assertArraysEqual(results3, ['GROUND : ground','CONTROL : control','TO : to','MAJOR : major','TOM : tom'
  ]);
 


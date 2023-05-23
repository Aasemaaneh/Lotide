const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};
  
// Test cases
assertEqual("LHL", "Bootcamp"); // Assertion Failed: Lighthouse Labs !== Bootcamp
assertEqual(3+4, 5+2); // Assertion Passed: 1 === 1
  
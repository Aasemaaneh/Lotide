const assertEqual = function(actual, expected) {
    if (String(actual) === String(expected)) {
      console.log(`✅✅✅ Assertion Passed:  ${actual}   ===  ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed:  ${actual}  !==  ${expected}`);
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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

  
  const eqObjects = function(object1, object2) {

  
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }
  
    for (const key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  
    return true;
  };
  

  // Testing eqObjects function
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

const obj1 = {a: 1,b: {c: 2,d: {e: 3}} };
const obj2 = { a: 1, b: { c: 2, d: { e: 3 } } };
const obj3 = { a: 1, b: { c: 2, d: { e: 4 } } };
  
assertEqual(eqObjects(obj1, obj2), true);
assertEqual(eqObjects(obj1, obj3), false);
  
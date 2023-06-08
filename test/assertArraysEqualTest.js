
const assertArraysEqual = require('../assertArraysEqual');

//Test Code
assertArraysEqual([1, 2, 3], [3, 2, 1,6]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 7], [1, 2, 7,6]);
assertArraysEqual([1, 2, 7], [1, 2, 7]);
assertArraysEqual('hello', 'hi');
assertArraysEqual('hello', 'hello');
assertArraysEqual(['hello','hi'], ['hi','hello']);
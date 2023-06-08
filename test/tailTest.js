//const assertArraysEqual = require('../assertArraysEqual');
//const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

//Test with Chai
describe("#tail", () => {
    it("returns [2, 3] for [1, 2, 3]", () => {
       assert.deepEqual(tail([1, 2, 3]), [2, 3]);
    });
  
    it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
      assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });
  
    it("returns [] for [1]", () => {
      assert.deepEqual(tail([1]), []);
    });
  
    it("returns [] for an empty array", () => {
      assert.deepEqual(tail([]), []);
    });
  
    it("does not modify the original array", () => {
      const words = ["Yo Yo", "Lighthouse", "Labs"];
      tail(words);
      assert.strictEqual(words.length, 3);
    });
  });
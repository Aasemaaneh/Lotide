const without = require('./without');
const flatten = require('./flatten');
const middle = require('./middle');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const map = require('./map');
const takeUntil = require('./takeUntil');
const findKey = require('./findKey');
const head = require('./head');
const tail = require('./tail');



// Export all utility functions as an object
//const lotide = {
//  without: without,
//  flatten: flatten,
//  middle: middle,
//  countOnly: countOnly,
//  countLetters: countLetters,
//  letterPositions: letterPositions,
//  findKeyByValue: findKeyByValue,
//  map: map,
//  takeUntil: takeUntil,
//  findKey: findKey,
//};

//Shortening object implement in Es6
const lotide = {
    without,
    flatten,
    middle,
    countOnly,
    countLetters,
    letterPositions,
    findKeyByValue,
    map,
    takeUntil,
    findKey,
    head,
    tail,
  }
module.exports = lotide;
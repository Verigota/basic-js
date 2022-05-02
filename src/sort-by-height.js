const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrWithout = arr.filter(elem => {
    return elem !== -1;
  });
  arrWithout.sort(function (a, b) {
    return a - b;
  });
  const result = arr.map(elem => {
    if(elem === -1){
      return -1;
    } else {
      return arrWithout.shift();
    }
  })
  return result;
}

module.exports = {
  sortByHeight
};

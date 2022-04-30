const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(!str){
    return '';
  }
  const arr = Array.from(str);
  let counter = 1;
  let result = "";
  arr.reduce((prev, curr, ind) => {
    if(curr === prev){
      counter++;
    } else {
      result = result + `${counter===1? '':counter}${prev}`;
      counter = 1;
    }
    return curr;
  })
  return result += `${counter===1? '':counter}${arr[arr.length-1]}`;
}
module.exports = {
  encodeLine
};

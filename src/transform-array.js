const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let transfInd = 0;
  const result = [...arr];
  const availableCommand = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  arr.forEach( (elem, ind) => {
    if (typeof elem === 'string'){
        switch (elem){
          case '--discard-next' : 
            if (result[ind+1]) {result[ind+1] = 'delete'};
            result[ind] = 'delete';
          break;
          case '--discard-prev' : 
          if (result[ind-1]) {result[ind-1] = 'delete'};
            result[ind] = 'delete';
          break;
          case '--double-next' : result[ind] = result[ind+1] || 'delete';
          break;
          case '--double-prev' : result[ind] = result[ind-1] || 'delete';
          break;
        }
      
    }
  })
  return result.filter(elem => {
    return elem !== 'delete';
  })
}

module.exports = {
  transform
};

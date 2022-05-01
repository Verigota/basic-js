const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additionalStr = createStr(options.addition, options.additionRepeatTimes, options.additionSeparator || '|');
  const strToRepeate = str+additionalStr;
  let result = createStr(strToRepeate, options.repeatTimes, options.separator);

  function createStr(str, repeatTimes, sep='+') {
    let finalStr = '';
      if(str !== undefined) {
        for(let i=0; i<repeatTimes-1; i++) {
          finalStr = finalStr + str + sep;
        }
        finalStr = finalStr + str;
      }
    return finalStr;
  }

  return result;
}

module.exports = {
  repeater
};

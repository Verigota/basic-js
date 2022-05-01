const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsObj= {};
  const uniqueDom = new Set();

  const arrOfArr = domains.map(elem => {
    return elem.split('.');
  })

  arrOfArr.forEach(elem => {
    uniqueDom.add(`${elem[elem.length-1]}`);
    if (elem[1] !== elem[elem.length-1]) {uniqueDom.add(`${elem[1]}.${elem[elem.length-1]}`)};
    uniqueDom.add(`${elem.join('.')}`);
  })

  uniqueDom.forEach(dom => {
    let counter = 0;
    domains.forEach(str => {
      if(str.includes(dom)){
        counter++;
      }
    })
    domainsObj[`.${dom.split('.').reverse().join('.')}`] = counter;
  })

  return domainsObj;
}

module.exports = {
  getDNSStats
};

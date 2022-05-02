const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  matrix.forEach((elem, indRow) => {
    result.push([]);
    elem.forEach((el, indCol) => {
      result[indRow].push('');
      checkNeighbors(matrix, indRow, indCol);
    })
  })

  function checkNeighbors (matrix, x, y) {
    let counter = 0;
    for(let i=x-1; i<x+2; i++){
      for (let j=y-1; j<y+2; j++){
        if(i === x && j === y)
        {
          continue;
        }
        
        if(matrix[i] && matrix[i][j]){
          counter++;
        }
      }
    }
    result[x][y] = counter;
  }

  return result;
}

module.exports = {
  minesweeper
};

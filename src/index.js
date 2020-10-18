
// You should implement your task here.

module.exports = function towelSort(matrix) {
  return matrix!==undefined ? matrix.flatMap((currentArray, indexOfArray) => indexOfArray%2 > 0 ? currentArray.reverse() : currentArray) : [];
};
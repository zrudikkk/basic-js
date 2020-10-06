const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((cats, item) => {

    if (item === '^^') {

      cats += 1;

      return cats;

    } else if (Array.isArray(item)) {

      return (cats + countCats(item));

    } else {

      return cats;

    }

  }, 0);
};

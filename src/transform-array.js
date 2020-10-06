const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Not array');
  }
  let transformedArr = [];
  let newArr = arr.slice();
  for (let i = 0; i < newArr.length; i++) {
    switch(newArr[i]){
      case '--discard-next':
      if (newArr[i + 1] !== undefined){
        newArr[i + 1] = '';
        i++;
      }
      break;
      case '--discard-prev':
      if (newArr[i - 1] !== undefined && (newArr[i - 1] === transformedArr[transformedArr.length - 1] || (isNaN(newArr[i - 1]) && isNaN(transformedArr[transformedArr.length - 1])))){
        transformedArr.pop();
      }
      break;
      case '--double-next':
      if (newArr[i + 1] !== undefined){
        transformedArr.push(newArr[i + 1]);
      }
      break;
      case '--double-prev':
        if (newArr[i - 1] !== undefined && newArr[i - 1] !== ''){
          transformedArr.push(newArr[i - 1]);
        }
        break;
        default:
          transformedArr.push(newArr[i]);
          break;
    }
  }
  return transformedArr;
};

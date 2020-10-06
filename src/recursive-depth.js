const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr))
    {
      return 1 + arr.reduce((depth, item) =>
      {
        return Math.max(depth, this.calculateDepth(item))
      }, 0)
    }
    else
    {
      return 0
    }
  }
}
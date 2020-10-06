const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || +sampleActivity >= 15 || +sampleActivity <= 0 || typeof(sampleActivity) !== 'string' || isNaN(parseFloat(sampleActivity))){
    return false;}
  let res = (15 / +sampleActivity) / 0.000122;
  return Math.ceil(res);
};

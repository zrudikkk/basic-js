const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let oneStr;
  str = String(str);
  if (options.additionRepeatTimes == undefined && options.addition != undefined) 
  {
    options.additionRepeatTimes = 1;
  } else if (options.additionRepeatTimes == undefined && options.addition == undefined) {
    options.additionRepeatTimes = 0;
  }
  if (options.additionSeparator == undefined) options.additionSeparator = '|';
  if (options.separator == undefined) options.separator = '+';
  if (options.repeatTimes == undefined) options.repeatTimes = 0;
  for (let i = 1; i <= options.additionRepeatTimes; i++){
    str += options.addition;
    if (i === options.additionRepeatTimes) break;
    str += options.additionSeparator;
  }
  oneStr = str;
  if (options.repeatTimes > 1) str += options.separator;
  for (let i = 2; i <= options.repeatTimes; i++){
    str += oneStr;
    if (i === options.repeatTimes) break;
    str += options.separator;
  }
  return str;
};
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {

    return false

  };

  result = '';

  for (let i = 0; i < members.length; i++){

    if (typeof members[i] === 'string'){

      result += members[i].trim()[0];

    }

  }

  return result.toUpperCase().split('').sort().join('');
};

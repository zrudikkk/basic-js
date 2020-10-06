const CustomError = require("../extensions/custom-error");

const chainMaker = {
  res: [],
  getLength() {
    return this.res.length;
  },

  addLink(value) {
    if (arguments.length === 0) {
      this.res.push('');
    } else {
      this.res.push(value);
    }
    return chainMaker;
  },

  removeLink(position) {
    if (position - Math.trunc(position) !== 0 || this.res[position - 1] == undefined || typeof position !== 'number'){
      this.res = [];
      throw new Error('Invalid position format');
    }
    this.res.splice(position - 1, 1);
    return chainMaker;
  },

  reverseChain() {
    this.res.reverse();
    return chainMaker;
  },

  finishChain() {
    let str = '';
    for (let i = 0; i < this.res.length; i++) {
      if (i === this.res.length - 1){
        str += `( ${this.res[i]} )`;
      } else {
        str += `( ${this.res[i]} )~~`;
      }
    }
    this.res = [];
    return str;
  },
};

module.exports = chainMaker;

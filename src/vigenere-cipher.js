const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(strictMode) {
    if (strictMode == undefined) {
      this.strictMode = true;
    } else {
      this.strictMode = strictMode;
    }
    this.message = '';
    this.key = '';
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  encrypt(message, key) {
    this.message = message;
    this.key = key;
    this.key = this.key.toUpperCase();
    let originalKey = this.key;
    if (this.message == undefined || this.key == undefined) {
      throw new Error('Invalid parameters');
    };
    if (this.strictMode === false){
      this.message = this.message.split('').reverse().join('');
    };
    this.key = this.key.repeat(Math.trunc(this.message.length / originalKey.length));
    this.key += originalKey.slice(0, this.message.length % originalKey.length);
    this.message = this.message.split('');
    let space = 0;
    this.message = this.message.map((item, id) => {
      if (item.match(/[a-z]/i)){
        item = item.toUpperCase();
        let regexpMessage = new RegExp(`${item}`,'');
        let regexpKey = new RegExp(`${this.key[id - space]}`,'');
        item = this.alphabet[(this.alphabet.match(regexpMessage).index + this.alphabet.match(regexpKey).index) % this.alphabet.length];
        return item;
      } else {
        space ++;
        return item;
      }
    });
    return this.message.join('');
  }
  decrypt(message, key) {
    this.message = message;
    this.key = key;
    this.key = this.key.toUpperCase();
    let originalKey = this.key;
    if (this.message == undefined || this.key == undefined) {
      throw new Error('Invalid parameters');
    };
    if (this.strictMode === false){
      this.message = this.message.split('').reverse().join('');
    };
    this.key = this.key.repeat(Math.trunc(this.message.length / originalKey.length));
    this.key += originalKey.slice(0, this.message.length % originalKey.length);
    this.message = this.message.split('');
    let space = 0;
    this.message = this.message.map((item, id) => {
      if (item.match(/[a-z]/i)){
        item = item.toUpperCase();
        let regexpMessage = new RegExp(`${item}`,'');
        let regexpKey = new RegExp(`${this.key[id - space]}`,'');
        item = this.alphabet[(this.alphabet.match(regexpMessage).index + this.alphabet.length - this.alphabet.match(regexpKey).index) % this.alphabet.length];
        return item;
      } else {
        space ++;
        return item;
      }
    });
    return this.message.join('');
  }
}

module.exports = VigenereCipheringMachine;

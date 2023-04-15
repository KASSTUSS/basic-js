const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  links: [],

  getLength() {
    return this.links.length;
  },
  addLink(value = '') {
    this.links.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.links.length ||
      !Number.isInteger(position)
    ) {
      this.links = [];
      //throw new Error("You can\'t remove incorrect link!");
      
    } else {
      this.links.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    const result = this.links.join("~~");
    this.links = [];
    return result;
  }
};

console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd')); //( 3rd )~~( function () { } )
module.exports = {
  chainMaker
};

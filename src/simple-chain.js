const chainMaker = {
  arrayChain: [],

  getLength() {
    return this;
  },

  addLink(value) {
    this.arrayChain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.arrayChain.length = 0;
      throw new Error;
    }
    this.arrayChain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arrayChain.reverse();
    return this;
  },

  finishChain() {
    const result = this.arrayChain.join('~~');
    this.arrayChain.length = 0;
    return result;
  }
};

module.exports = chainMaker;

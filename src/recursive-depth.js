module.exports = class DepthCalculator {
  constructor(){
    this.calculateDepth = this.calculateDepth.bind(this);
  }

  calculateDepth(arr) {
    return Array.isArray(arr) ? 1 + Math.max(0, ...arr.map(this.calculateDepth)) : 0;
  };
}
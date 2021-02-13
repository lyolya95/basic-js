const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(num) {
  const result = Math.ceil(Math.log(MODERN_ACTIVITY / +num) / (0.693 / HALF_LIFE_PERIOD));
  return typeof num === 'string' && !num && !isNaN(+num) && !result;
};

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(num) {
  if (typeof num !== 'string' || !num || isNaN(+num) || +num == 0) return false
  const result = Math.ceil(Math.log(MODERN_ACTIVITY / +num) / (0.693 / HALF_LIFE_PERIOD));
  return result > 0 && result;
};

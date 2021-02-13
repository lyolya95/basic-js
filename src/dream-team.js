module.exports = function createDreamTeam(array) {
  return Array.isArray(array) && array.filter(item => typeof item === 'string').map(item => item.trim()[0].toUpperCase()).sort().join('');
};

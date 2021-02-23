module.exports = function repeater(str, options) {
  let separatorString = '';
  let newString = '';
  const separator = options.separator ? options.separator : '+';

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
    separatorString += `${options.addition}${i < options.additionRepeatTimes - 1 ? additionSeparator : ''}`;
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    newString += `${str}${separatorString}${i < options.repeatTimes - 1 ? separator : ''}`;
  }

  return newString ? newString : `${str}${options.addition}`;
};
  
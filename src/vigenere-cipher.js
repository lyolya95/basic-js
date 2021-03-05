class VigenereCipheringMachine {
  constructor (value) {
    this.value = value;
    this.alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.encryptText = '';
  }

  keyChange(message, key) {
    if (!message || !key) throw new Error('Not parameters');
    return key.repeat(Math.ceil(message.length / key.length));
  }

  result() {
    const result = this.value === false ? this.encryptText.split('').reverse().join('') : this.encryptText;
    this.encryptText = '';
    return result;
  }

  encrypt(message, key) {
    key = this.keyChange(message, key);
    for (let i = 0; i < message.length; i++) {
      let valueMessage = this.alphabetUpperCase.indexOf(message.toUpperCase()[i]);
      if (valueMessage === -1) key = '1'+ key;
      let valueKey = this.alphabetUpperCase.indexOf(key.toUpperCase()[i]);
      this.encryptText += valueMessage > -1 ? this.alphabetUpperCase[(valueMessage + valueKey) % 26] : message[i];
    }

    return this.result();
  }

  decrypt(message, key) {
    key = this.keyChange(message, key);
    for (let i = 0; i < message.length; i++) {
      let valueMessage = this.alphabetUpperCase.indexOf(message.toUpperCase()[i]);
      if (valueMessage === -1) key = '1'+ key;
      let valueKey = this.alphabetUpperCase.indexOf(key.toUpperCase()[i]);
      this.encryptText += valueMessage > -1 ? this.alphabetUpperCase[(valueMessage - valueKey + 26) % 26] : message[i];
    }

    return this.result();
  }
}

module.exports = VigenereCipheringMachine;

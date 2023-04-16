const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      const messageChar = messageUpper[i];
      if (/[^A-Z]/.test(messageChar)) {
        result += messageChar;
        continue;
      }

      const keyChar = keyUpper[j % key.length];
      const keyCharCode = keyChar.charCodeAt(0) - 65;
      const messageCharCode = messageChar.charCodeAt(0) - 65;
      const encodedCharCode = (messageCharCode + keyCharCode) % 26;
      const encodedChar = String.fromCharCode(encodedCharCode + 65);
      result += encodedChar;

      j++;
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const encryptedMessageUpper = encryptedMessage.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const encryptedMessageChar = encryptedMessageUpper[i];
      if (/[^A-Z]/.test(encryptedMessageChar)) {
        result += encryptedMessageChar;
        continue;
      }

      const keyChar = keyUpper[j % key.length];
      const keyCharCode = keyChar.charCodeAt(0) - 65;
      const encryptedMessageCharCode = encryptedMessageChar.charCodeAt(0) - 65;
      const decodedCharCode = (encryptedMessageCharCode - keyCharCode + 26) % 26;
      const decodedChar = String.fromCharCode(decodedCharCode + 65);
      result += decodedChar;

      j++;
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

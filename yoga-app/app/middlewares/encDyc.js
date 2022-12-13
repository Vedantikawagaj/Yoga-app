const CryptoJS = require('crypto-js');
const passphrase = '123';

exports.encryptWithAES = (text) => {
    return CryptoJS.AES.encrypt(text, passphrase).toString();
};

exports.decryptWithAES = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
};
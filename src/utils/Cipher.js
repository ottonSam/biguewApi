const crypto = require('crypto');

module.exports = {
    criptografar(senha) {
        const cipher = crypto.createCipher('aes256', senha);
        cipher.update(senha);
        return cipher.final('hex');
    },
    id() {
        return crypto.randomBytes(8).toString('HEX');
    }
}
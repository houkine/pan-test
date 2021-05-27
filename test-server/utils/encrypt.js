const bcrypt = require('bcrypt')
const config = require('../config')

function GenerateCiphertext(payload){
    let saltRounds = config.bcrypt_saltRounds
    return bcrypt.hashSync(payload,saltRounds)
}

function ComparePlaintextWithCiphertext(plaintext,ciphertext){
    return bcrypt.compare(plaintext,ciphertext)
}

module.exports = {
    GenerateCiphertext,
    ComparePlaintextWithCiphertext,
}

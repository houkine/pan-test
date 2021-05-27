const jwt = require('jsonwebtoken')
const config = require('../config')

// const logger = require('../utils/logger')

function GenerateJWTToken(payload){
    const secretKey=config.JWT_secretKey
    const expire=Date.now()+config.JWT_expires_in
    const token=jwt.sign({payload,expire},secretKey)
    return { token,
        token_type:'Bearer',
        expires_in:config.JWT_expires_in}
}

// function VerifyJWTToken(token,callback){
//     jwt.verify(token.token,config.JWT_secretKey,callback)
// }

async function VerifyJWTToken(token){

    try {
        let data = await jwt.verify(token.token,config.JWT_secretKey)
        return {
            token:true,
            data:data
        };
    } catch (e) {
        return {
            token:false,
            data:e
        }
    }
}

function VerifyEmail(email,req){
    return new Promise((resolve,reject)=>{
        try {
            resolve(true)
            // let data = jwt.verify(token.token,config.JWT_secretKey)
            // if(data.payload===email){
            //     resolve(true)
            // }else{
            //     resolve(false)
            // }
        } catch (e) {
            reject("verify failed")
        }
    })
}



module.exports = {
    GenerateJWTToken,
    VerifyJWTToken,
    VerifyEmail
}

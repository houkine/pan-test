// components
var config =require('../config');
var db =require('../utils/db');

/**
 * init user object
 * fill blank parameters, assign/remove id (PK)
 * @param {user} user object need to be filter/init
 */
function init(user){
    if(!user.u_id){
        return{
            u_email:(user.u_email)?(user.u_email):(''),
            u_password:(user.u_password)?(user.u_password):(''),
            u_address:(user.u_address)?(user.u_address):(''),
            u_image:user.u_image,
            u_name:(user.u_name)?(user.u_name):('')
        }
    }else{
        return user
    }
}

module.exports = {
    init,
}
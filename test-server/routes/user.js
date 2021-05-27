var express = require('express');
var router = express.Router();

// components
let db = require("../utils/db");
let userModel = require("../models/user");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post("/register", function (req, res) {
  console.log(req.body);
  //1 get user object from request body
  let user = req.body;
  let { u_email } = user;
  //2 find password from db through search email
  // select * from 'users' where u_email = {email}
  db("users")
    .where({ u_email })
    .then((users) => {
      if (users.length === 0) {
        // user not existed, ready to insert
        user = userModel.init(user);
        // user.u_password = encryptor.GenerateCiphertext(user.u_password);
        db("users")
          .insert(user)
          .then((data) => {
            if (data.length != 1) {
              // 3.2 insert error, should be system error, return 401 and log
              logger.logging(data);
              res.status(204).json(null);
              return;
            } else {
              // find the user just insert to the users table
              db("users")
                .where({ u_id: data[0] })
                .then((users) => {
                  if (users.length !== 1) {
                    // 3.3 find new user failed, should be a system error, return 401 and log
                    logger.logging(users);
                    res.status(204).json(null);
                  }
                  // 3 200 sign up successfully
                  // response schema
                  res.status(200).json({
                    // JWT: JWT.GenerateJWTToken(u_email),
                    user: users[0],
                  });
                  console.log("success")
                  return;
                });
            }
          });
      } else {
        // 3.1 401 	sign up failed, email is existed
        res.status(204).json(null);
        return;
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/setting", (req,res)=>{
  let u_id = req.query;
});

module.exports = router;

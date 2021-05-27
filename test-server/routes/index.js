var express = require('express');
var router = express.Router();

// components
let db = require("../utils/db");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET personal info page. */
router.get('/personalInfo', function(req, res) {
  let {u_id} = req.query;
  console.log("req.query:"+req.query.u_id);
  // 3 search item from database use knex
  db('users').where({u_id}).then((resultSet)=>{
    if(resultSet.length==1){
      console.log('resultSet[0]:'+resultSet[0])
      res.status(200).json(resultSet[0])
      return
    }else{
      // 3.1 403	search failed, u_id not exist
      res.status(403).json(null)
      return
    }
  }).catch((error)=>{
    console.log(error)
    return
  })
});

/* GET updates list. */
router.get('/updates', function(req, res) {
  db('updates').leftJoin('users','users.u_id','updates.u_id').then((resultSet)=>{
    console.log('resultSet:'+resultSet)
    res.status(200).json(resultSet)
    return
  }).catch((error)=>{
    logger.log(error)
    return
  })
});

/* GET events list. */
router.get('/events', function(req, res) {
  let {u_id} = req.query;
  console.log("u_id:"+u_id);
  // 3 search item from database use knex
  db('events').where({u_id}).then((resultSet)=>{
    console.log('resultSet:'+resultSet)
    res.status(200).json(resultSet)
  }).catch((error)=>{
    logger.log(error)
    return
  })
});

module.exports = router;

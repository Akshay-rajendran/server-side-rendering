var express = require('express');
const { home,main,log,product,user } = require('../controllers/controller');
var router = express.Router();




/* GET home page. */
router.get('/home',home)

router.get("/main",main)

router.get("/log",log)

router.get("/productt",product)

router.get("/user",user)

module.exports = router;

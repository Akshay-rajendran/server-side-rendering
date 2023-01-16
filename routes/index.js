var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'vyshnavi' });
});

router.get("/main",(req,res,next)=>{
  res.render("index",{title:"main"})
})

router.get("/log",(req,res,next)=>{
  res.render("login",{title:"userlogin",label:"username"})
})

module.exports = router;

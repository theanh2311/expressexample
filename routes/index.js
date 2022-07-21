var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express',
  name:'NTA2K'});
});

router.get('/home',function (req,res) {
  res.render('home')
});

router.get('/blank',function (req,res){
  res.render('blank')
})

router.get('/buttons',function (req,res){
  res.render('buttons')
})
router.get('/404',function (req,res){
  res.render('404')
})
router.get('/card',function (req,res){
  res.render('card')
})
router.get('/charts',function (req,res){
  res.render('charts')
})
router.get('/forgot-password',function (req,res){
  res.render('forgot-password')
})
router.get('/login',function (req,res){
  res.render('login')
})
router.get('/register',function (req,res){
  res.render('register')
})
router.get('/tables',function (req,res){
  res.render('tables')
})
router.get('/utilities-animation',function (req,res){
  res.render('utlities-animation')
})
router.get('/utilities-border',function (req,res){
  res.render('utlities-border')
})
router.get('/utilities-color',function (req,res){
  res.render('utlities-color')
})
router.get('/utilities-other',function (req,res){
  res.render('utlities-other')
})
module.exports = router;

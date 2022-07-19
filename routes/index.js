var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
  name:'NTA2K'});
});

router.get('/home',function (req,res) {
  var tuoi  = 21;
  var diachi = 'Ha Noi';
  var mangSo = [1,2,3,4,5];
  var mangTen = ['anh','tien','phuong'];
  res.render('home',{
  age : tuoi,
  address : diachi,
    arr1 :mangSo,
    arr2:mangTen
  });
});

module.exports = router;

var express=require('express');
let router=express.Router();
//let mongojs=require('mongojs');
//let db=mongojs('mongodb://user:user@ds013956.mlab.com:13956/swifthire',['users']);

router.get('/',function(req,res,next){
  // db.users.find(function(err,users){
       res.send('idex p');
  // })
});

module.exports=router;
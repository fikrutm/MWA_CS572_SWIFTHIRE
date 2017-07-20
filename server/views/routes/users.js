var User = require('../model/user');
var express=require('express');
let router=express.Router();


router.get('/',function(req, res) {
  
  User.find(function(err, user) {
    if (err) {
      return res.send(err);
    }

    res.json(user);
  });
});

router.get('/user/:email',function(req,res,next){
  console.log('af'+req.params.email);
   User.findOne({email:req.params.email}, function(err,user) {
    if (err) {
      return res.send(err);
    }

    res.json(user);
  });
});

router.delete('/user/:email',function(req,res,next){
   User.remove({
    email: req.params.email
  }, function(err, user) {
    if (err) {
      return res.send(err);
    }

    res.json({ message: 'Successfully deleted' });
  });
});

router.route('/').post(function(req, res) {
  var user = new User(req.body);

  user.save(function(err) {
    if (err) {
      return res.send(err);
    }

    res.send({ message: 'user Added' });
  });
});
router.put('/user/:email', (req, res) => {
  User.findOne({email: req.params.email }, function(err, user) {
    if (err) {
      return res.send(err);
    }

    for (prop in req.body) {
      user[prop] = req.body[prop];
    }


    user.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.json({ message: 'user updated!' });
    });
  });
});

module.exports=router;
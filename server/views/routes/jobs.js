




var express = require('express');
var router = express.Router();
var mongojs=require('mongojs')
var db=mongojs('mongodb://user:user@ds013956.mlab.com:13956/swifthire',['jobs']);



//1.get all users 
 
router.get('/job/:id', function(req, res, next) {
  db.jobs.find({_id: mongojs.ObjectId(req.params.id)},(err, jobs)=>{
      if(err){
          res.send(err);
      }
      res.json(jobs);
  });
});
router.get('/', function(req, res, next) {
  db.jobs.find((err, jobs)=>{
      if(err){
          res.send(err);
      }
      res.json(jobs);
  });
});
router.delete('/job/:id', function(req, res, next){

  
    db.jobs.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, data){
        if(err){
            res.send(err);
        }
        res.json(data);
        console.log("from server side:deleted successfully")
    });
});

router.post('/', function(req, res, next){
    var job = req.body;
 
  
        db.jobs.save(job, function(err, data){
            if(err){
                res.send(err);
            }
            res.json(data);
        });
   
});


router.get('/joblocation/:lo/:la', function (req, res, next) { //req.params.lo, req.params.la
   
    db.jobs.find({
     location:
       { $near :
          {
            $geometry: { type: "Point",  coordinates: [  parseInt(req.params.lo), parseInt(req.params.la) ] },
            $minDistance: 0,
            $maxDistance: 50000000000000000
          }
       }
   }).limit(10).toArray((err,job)=>{
 if (err) {
            res.send(err);
        }
        res.json(job);
   });
});
  router.get('/minfee/:minFee', function (req, res, next) { 
    //req.params.lo, req.params.la
  db.jobs.find({hourlyFee:{$gt:parseInt(req.params.minFee)}} ,function (err,job){
 if (err) {
            res.send(err);
        }
        res.json(job);
});
  });
 
  router.get('/category/:category', function (req, res, next) { 
    //req.params.lo, req.params.la
  db.jobs.find({category:req.params.category}).toArray(function (err,job){
 if (err) {
            res.send(err);
        }
        res.json(job);
});
  });

  router.put('/job/:id', (req, res) => {
  User.findOne({_id: req.params.id }, function(err, job) {
    if (err) {
      return res.send(err);
    }

    for (prop in req.body) {
      user[prop] = req.body[prop];
    }


    job.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.json({ message: 'job updated!' });
    });
  });
});
module.exports = router;


  

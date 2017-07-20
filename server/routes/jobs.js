




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

    // db.clubs.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, data){
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

/*router.get('/oblocation/:lo/:la', function (req, res, next) { //req.params.lo, req.params.la
   
    db.jobs.find({
     location:
       { $near :
          {
            $geometry: { type: "Point",  coordinates: [  parseInt(req.params.lo), parseInt(req.params.la) ] },
            $minDistance: 0,
            $maxDistance: 50000000000000000
          }
       }
   }, (err,job)=>{
 if (err) {
            res.send(err);
        }
        res.json(job);
    });
});*/
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


  
//1.get all messages
/*
router.get('/chatmessages/:fromuserid/:touserid', function(req, res, next) {
 dbmsg.chatmessages.find({$or:[{fromuserid:req.params.fromuserid,touserid:req.params.touserid},{fromuserid:req.params.touserid,touserid:req.params.fromuserid}]},(err, msg)=>{
      if(err){
          res.send(err);
      }
      res.json(msg);
  });
});


router.post('/add', function(req, res, next){

  console.log("post service........"+req.body);
    var message = req.body;
    if(!message.fromuserid || !(message.touserid)){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
       dbmsg.chatmessages.save(message,(err, msg)=>{
                 if(err){
                res.send(err);
            }
            res.json(msg);
        });
    }
});


//2. get one user
router.get('/:id', function(req, res, next) {
  db.users.find({_id: mongojs.ObjectId(req.params.id)},(err, clubs)=>{
      if(err){
          res.send(err);
      }
      res.json(clubs);
  });
});


//3.add/save user information
router.post('/', function(req, res, next){
    var users = req.body;
 
    
    if(!users.name || !(users.email)){
        res.status(400);
        res.json({
            "error": "Bad Data : sent from server"
        });
    } 
    else {
        db.users.save(users, function(err, data){
            if(err){
                res.send(err);
            }
            res.json(data);
        });
    }
});


//4. update user

router.put('/:id', function(req, res, next){
    var user = req.body;
    var upduser = {};
    
    if(user.name){
        upduser.name = user.name;
    }
    
    if(user.email){
       upduser.email = user.email;
    }
    
    if(!upduser){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.users.update({_id: mongojs.ObjectId(req.params.id)},upduser, function(err, club){
        if(err){
            res.send(err);
        }
        res.json(club);
    });
    }
});


// 5. delete user
router.delete('/:id', function(req, res, next){

    // db.clubs.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, data){
    db.clubs.remove({email:req.params.id}, function(err, data){
        if(err){
            res.send(err);
        }
        res.json(data);
        console.log("from server side:deleted successfully")
    });
});

*/







/*var Job = require('../model/job');
var express=require('express');
let router=express.Router();


router.get('/joblocation/:lo/:la', function (req, res, next) { //req.params.lo, req.params.la
   
    Job.find({
     location:
       { $near :
          {
            $geometry: { type: "Point",  coordinates: [ req.params.lo, req.params.la ] },
            $minDistance: 0,
            $maxDistance: 5000
          }
       }
   }, (err,job)=>{
 if (err) {
            res.send(err);
        }
        res.json(job);
    });
});

/*
router.get('/jobs/:id',function(req, res) {

 Job.findOne({_id:req.params.id}, function(err,job) {
   
    if (err) {
      
      return res.send(err);
    }
    console.log(job)
Job.find({ coords: { '$near': { 
        '$maxDistance': 100,
        '$geometry': { type: 'Point', coordinates: [ job.coords.lng,job.coords.lat ] } } } 
    },function(err,job) {
    if (err) {
    
      return res.send(err);
    }

    res.json(job);});
  /* res.json( Job.find({ coords: { '$near': { 
        '$maxDistance': 1,
        '$geometry': { type: 'Point', coordinates: [ job.coords.lng,job.coords.lat ] } } } 
    }) )
  });
  

 } );

 */
/*
router.get('/',function(req, res) {
  
  Job.find(function(err,job) {
    if (err) {
      return res.send(err);
    }

    res.json(job);
  });
});

router.get('/job/:id',function(req,res,next){
  console.log('af'+req.params.id);
   Job.findOne({_id:req.params.id}, function(err,job) {
    if (err) {
      return res.send(err);
    }

    res.json(job);
  });
});

router.delete('/job/:id',function(req,res,next){
   Job.remove({
    _id: req.params.id
  }, function(err, job) {
    if (err) {
      return res.send(err);
    }

    res.json({ message: 'Successfully deleted' });
  });
});


router.route('/').post(function(req, res) {
  console.log('am in post');
  var job = new Job(req.body);

  job.save(function(err) {
    if (err) {
      return res.send(err);
    }

    res.send({ message: 'job Added' });
  });
});*/

/*router.route('/').post( function (req, res) {
   console.log(req.body+'in api');
  new Job({
    
    name: req.body.name, description: req.body.description,
    category:req.body.category,duration:req.body.duration,

    DurationPerHour:req.body.DurationPerHour,
    descrihourlyFee:req.body.descrihourlyFee,
    status:req.body.status,
    preferredDateTime:req.body.preferredDateTime,
    wattingList:req.body.wattingList,
    
    location: {
      type: "Point",
      coordinates:[req.body.location.coordinates[0],req.body.location.coordinates[1]]
    }
  }).save(function (e, result) {
    console.log(req.body.coords);
  });

});
router.put('/job/:id', (req, res) => {
  Job.findOne({ _id: req.params.id }, function(err, job) {
    if (err) {
      return res.send(err);
    }

    for (prop in req.body) {
      job[prop] = req.body[prop];
    }


    job.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.json({ message: 'job updated!' });
    });
  });
});


module.exports=router;

*/
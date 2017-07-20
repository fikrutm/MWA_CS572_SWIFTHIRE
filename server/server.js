var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');

var index=require('./routes/index');
var users=require('./routes/users');
var jobs=require('./routes/jobs');
var cors = require('cors');
var port=3000;
var app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view-engine','ejs');
app.engine('html',require('ejs').renderFile);



app.use(express.static(path.join(__dirname,'client')));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/',index);

app.use('/users',users);

app.use('/jobs',jobs);
app.use(cors());

app.use(function(req, res,next) {
res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if we need the website to include cookies in the requests sent
   
    res.setHeader('Access-Control-Allow-Credentials', true);
next();
});
app.listen(port,function(){
    console.log('server started on port '+port);


    
})
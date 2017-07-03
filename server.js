var model = require('./models/model.js')
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

var db = 'mongodb://localhost/newData';

mongoose.connect(db, function(err,response){
  if(err){
    console.log('falied to connect');
  }
  else {
    console.log('connected to db' +db );
  }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(morgan('dev'));

app.get('/',function(req,res){
  res.send('hello');
})

app.listen(3000, function(){
  console.log('listening at port 3000');
})

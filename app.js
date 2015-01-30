var express        =        require("express");
var bodyParser     =        require("body-parser");
var util           =        require("util");
var uuid = require('node-uuid');

var app            =        express();
app.use(bodyParser.json());
app.get('/echo',function(req,res){
  res.set(req.headers);
  res.write(new Buffer({'_id':uuid.v4()}));
  res.end();
});
app.put('/echo',function(req,res){
  res.set(req.headers);
  res.write(JSON.stringify(req.body));
  res.end();
});
app.post('/echo',function(req,res){
  res.set(req.headers);
  res.write(JSON.stringify(req.body));
  res.end();
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})

var express        =        require("express");
var bodyParser     =        require("body-parser");
var util           =        require("util");
var uuid = require('node-uuid');

var app            =        express();
app.use(bodyParser.json());
app.get('/echo',function(req,res){
  console.log("REQUEST headers "+JSON.stringify(req.headers));
  res.write(JSON.stringify({'_id':uuid.v4()}));
  res.end();
});
app.put('/echo',function(req,res){
  console.log("REQUEST headers "+JSON.stringify(req.headers));
  res.write(JSON.stringify(req.body));
  res.end();
});
app.post('/echo',function(req,res){
  console.log("REQUEST headers "+JSON.stringify(req.headers));
  res.write(JSON.stringify(req.body));
  res.end();
});

app.get('/',function(req,res){
  console.log("REQUEST headers "+JSON.stringify(req.headers));
  res.write(new Buffer({'msg':'hello!'}));
  res.end();
});

var startServing = function() {
    var port = process.env.PORT || 3000;
    server = app.listen(port, function() {
        console.log('Listening on port %d', server.address().port);
    });
};

startServing();
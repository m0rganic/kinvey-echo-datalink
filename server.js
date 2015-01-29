var express        =        require("express");
var bodyParser     =        require("body-parser");
var util           =        require("util");
var app            =        express();
app.use(bodyParser.json());
app.get('/echo',function(req,res){
  console.log("GET: "+util.inspect(req));
  res.end({'_id':new Date().toString()});
});
app.put('/echo',function(req,res){
  console.log("PUT: "+util.inspect(req));
  console.log("PUT: "+req.body);
  res.end(res.body);
});
app.post('/echo',function(req,res){
  console.log("POST: "+util.inspect(req));
  console.log("POST: "+res.body);
  res.end(res.body);
});
app.delete('/echo',function(req,res){
  console.log("DELETE: "+util.inspect(req));
  console.log("DELETE: "+res.body);
  res.end(res.body);
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})

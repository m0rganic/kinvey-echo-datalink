var express = require('express');
var bodyParser = require('body-parser');

var buildAuthEndpoint = function(authFunc) {
    return function(req, res, next) {
        var body = req.body;
        console.log("body: "+JSON.stringify(body));
        var username = body.username;
        var password = body.password;
        console.log("u: "+username);
        console.log("p: "+password);
    
        authenticateUser(username, password, function(err, tokens) {
            if (err) {
                res.status(401);
                res.send();
            } else {
                res.set('Content-Type', 'application/json');
                res.send(JSON.stringify(tokens));
            }
        });
    };
};

var authenticateUser = function(username, password, callback) {
    // Connect to any systems that are required to obtain the token 
    // and evaluate the results
    // For a sample use case, any user with the username "demo" is 
    // a valid user and has a token of "demo-token"
    if (username === "demo") {
        return callback(null, {
            token: "demo-token"
        });
    } else {
        return callback(new Error("Invalid user"));
    }
};

var buildAuth = function() {
    app.post('/auth', buildAuthEndpoint());
};

var startServing = function() {
    var port = process.env.PORT || 3000;
    server = app.listen(port, function() {
        console.log('Listening on port %d', server.address().port);
    });
};

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
buildAuth();
startServing();
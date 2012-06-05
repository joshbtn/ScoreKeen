var pg_config = require('../pg_config.js')
    , pg = require('pg');

// Routes - Web Services
//app.get('/ws/:servicename', routes.wsRouter);
app.get('/ws/', routes.wsRouter);

exports.wsRouter = function(req, res){res.send("works")};

/*exports.GET_score = function(req, res){
  var ret = {'test': 'test'};
  
  res.header("Content-Type", "application/json");
  
  res.send(JSON.stringify(ret));
};

exports.PUT_score = function(req, res){
    
};*/
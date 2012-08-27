var pg = require('pg')
    ,_ = require('underscore')
    ,pgConfig = require('../pg_config.js');

/*
 * GET home page.
 */
exports.landing = function(req, res){
    var MAX_SCORE = 10
        score1 = 0
        , score2 = 0
        ,connectionString = 
            "postgres://" + pgConfig.user + ":" 
            + pgConfig.password  + "@"  + pgConfig.host 
            + ":" + pgConfig.port 
            + "/" + pgConfig.dbname;
    
    
    pg.connect(connectionString, function(err, client) {
        client.query('SELECT * FROM score', [], function(err, result) {
            score1 = _.find(result.rows, function(res){return res.id == 1}).value;
            score2 = _.find(result.rows, function(res){return res.id == 2}).value;
            
            res.render('index', { 
                title: 'Foosball'
                , score1: score1
                , score2: score2
                , bar1Width: Math.min( (score1 / MAX_SCORE) * 100, 100 )
                , bar1Color: score1 >= score2 ? 'progress-success' : 'progress-warning'
                , bar2Width: Math.min( (score2 / MAX_SCORE) * 100, 100 )
                , bar2Color: score1 <= score2 ? 'progress-success' : 'progress-warning'
            });
        });
    });
};
var pg = require('pg')
    ,pgConfig = require('../pg_config.js');

/*
 * GET home page.
 */

exports.index = function(req, res){
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
            score1 = result.rows[0].value;
            score2 = result.rows[1].value;
            
            res.render('index', { 
                title: 'Foosball'
                , score1: score1
                , score2: score2
                , bar1Width: Math.min( (score1 / MAX_SCORE)* 100, 10 )
                , bar1Color: score1 > score2 ? 'progress-success' : 'progress-warning'
                , bar2Width: Math.min( (score2 / MAX_SCORE)* 100, 10 )
                , bar2Color: score1 < score2 ? 'progress-success' : 'progress-warning'
            });
        });
    });
};
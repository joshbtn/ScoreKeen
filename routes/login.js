var pg = require('pg')
    ,_ = require('underscore')
    ,pgConfig = require('../pg_config.js');

/*
 * GET home page.
 */
exports.landing = function(req, res){
    res.render('login', {
        title: "login"
    });
}
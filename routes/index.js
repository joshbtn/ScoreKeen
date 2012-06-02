var pg_config = require('../pg_config.js')
	, pg = require('pg');

/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Foosball' });
};
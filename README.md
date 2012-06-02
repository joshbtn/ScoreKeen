ScoreKeen
---------

for postgresql the pg_config.js file should sit on the root and look like the example below

    (function(pg_config){

        pg_config.host = "eample.com";
        pg_config.port = 5432;
        pg_config.dbname = "dbName";
        pg_config.user = "dbUser";
        pg_config.sslmode = "require";
        pg_config.password = "password";

    }(typeof module == 'object' ? module.exports : {}))
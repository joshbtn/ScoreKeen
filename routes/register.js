/*
 * GET home page.
 */
exports.landing = function(req, res){
    res.render('register', {
        title: "Register"
    });
}
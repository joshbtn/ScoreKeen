/*
 * GET home page.
 */
exports.landing = function(req, res){
    res.render('manage', {
        title: "Manage"
    });
}
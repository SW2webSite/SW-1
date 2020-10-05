//jshint esversion:6

module.exports = function(req, res){
  console.log(req.session);
    res.render('home');
};

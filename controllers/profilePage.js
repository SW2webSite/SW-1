//jshint esversion:6
const User = require('../models/User');

module.exports = function(req, res){
  User.findById(req.session.userId, function(err, user){
    if(user){
      res.render('profile', {
        user: user
      });
    }
  });
};

//jshint esversion:6
const Category = require('../models/Category');

module.exports = function(req, res){
    res.render('Register', {
      errors: req.flash('registerationErrors'),
      cartErrors: req.flash('addingCartErrors'),
      data: req.flash('data')[0]
    });
};

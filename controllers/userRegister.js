//jshint esversion:6
const User = require('../models/User');
const Cart = require('../models/Cart');

module.exports= function(req, res){
  console.log(req.body);
  user = User.create(req.body, function(error, user){
    if(error){
      const registerationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
      req.session.registerationErrors = registerationErrors;
      req.flash('registerationErrors', registerationErrors);
      req.flash('data', req.body);
      return res.redirect('/register');
    }
    var cart = new Cart();
    cart.owner = user._id;
    cart.save(function(err){
      if(err){
        const addingCartErrors = Object.keys(err.errors).map(key => err.errors[key].message);
        req.session.addingCartErrors = addingCartErrors;
        req.flash('addingCartErrors', addingCartErrors);
        req.flash('data', req.body);
        return res.redirect('/register');
      }
    });
    return res.redirect('/login');
  });
};

//jshint esversion:6

module.exports = function(req, res){
    res.render('contact', {
      successMessage: req.flash('success'),
      failureMessage: req.flash('failure'),
    });
};

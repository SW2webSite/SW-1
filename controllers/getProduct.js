const Product = require('../models/Product');

module.exports = function(req, res, next) {
  Product.findById({ _id: req.params.id }, function(err, product) {
    if (err) return next(err);
    req.session.productId = req.params.id;
    res.render('single-product', {
      product: product
    });
  });
};

var express = require('express');
var router = express.Router();
var exchangeRates = require('../model/currencyDB');

/*GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/* GET convert page */
router.get('/convert', function(req, res, next){
  // Dollar amount for converting
  var dollars = req.query.dollars;
  // Convert to a different currency
  var toCurrency = req.query.to_currency;

  var fromCurrency = req.query.from_Currency;

  var converted = dollars * exchangeRates[toCurrency];
  //console.log(exchangeRates);
  res.render('results', {
  dollars: dollars,
  toCurrency: toCurrency,
  converted: converted}
);

});

router.get('/about', function(req, res, next) {
  res.render('about', {name: "my awesome site!"});
});


module.exports = router;

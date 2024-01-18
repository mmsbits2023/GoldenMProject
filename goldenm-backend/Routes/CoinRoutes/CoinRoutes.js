const CoinController = require('../../Controller/CoinController');
const CoinSchema = require('../../Schemas/InvestorSchemas')
const universalFunction = require('../../Functions/universalFunction');
const validationFunction = require("../../Functions/validationFunction");
const Router = require("express").Router();


// Coin Details  API
Router.route('/coinDetails').post(
   universalFunction.authenticateUser,
   validationFunction.validateUser(CoinSchema.addCoinDetailsSchemas),
   CoinController.CoinDetailsData
);
//calculation


Router.route('/calculate').post(
   universalFunction.authenticateUser,
   validationFunction.validateUser(CoinSchema.addCoinDetailsSchemas),
   CoinController.CoinCalculation
);
exports.Router=Router;
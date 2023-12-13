const CoinController = require('../../Controller/CoinController');
const CoinSchema = require('../../Schemas/InvestorSchemas')
const universalFunction = require('../../Functions/universalFunction');
const validationFunction = require("../../Functions/validationFunction");
const Router = require("express").Router();


//Add Coin Details  API
Router.route('/coinDetails').post(
   validationFunction.validateUser(CoinSchema.addCoinDetailsSchemas),
   CoinController.CoinDetails
);
exports.Router=Router;
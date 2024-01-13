const InvestorController = require('../../Controller/InvestorController');
const InvestorSchema = require('../../Schemas/InvestorSchemas');
const universalFunction = require('../../Functions/universalFunction');
const validationFunction = require("../../Functions/validationFunction");
const Router = require("express").Router();


//Investor Register API
Router.route('/register').post(
   validationFunction.validateUser(InvestorSchema.InvestorRegisterSchema),
   InvestorController.registerInvestor
);

//Investor Login API
Router.route('/login').post(

    validationFunction.validateUser(InvestorSchema.InvestorLoginSchema),
    InvestorController.loginInvestor
);
// Investor Logout API
Router.route('/logout').post(
    universalFunction.authenticateUser,
    validationFunction.validateUser(InvestorSchema.logoutInvestorSchemas),
    InvestorController.InvestorLogout
);
 
// Get All Investor List
Router.route('/getAllInvestorList').post(
        InvestorController.getAllInvestorList
);
//Get One Investor Details
Router.route('/getOneInvestorDetails').post(
    universalFunction.authenticateUser,
    validationFunction.validateUser(InvestorSchema.getOneInvestorSchemas),
    InvestorController.getOneInvestorDetails
);
//Get wallet Address Investor Details
Router.route('/getWalletAddressInvestorDetails').get(
    universalFunction.authenticateUser,
    validationFunction.validateUser(InvestorSchema.getOneInvestorSchemas),
    InvestorController.getWalletAddressInvestorDetails
);
//Update Investor Details
Router.route('/updateInvestorDetails').post(
    universalFunction.authenticateUser,
    validationFunction.validateUser(InvestorSchema.updateInvestorSchemas),
    InvestorController.updateInvestorDetails
)
//Delete Investor Details
Router.route('/deleteInvestorDetails').post(
    universalFunction.authenticateUser,
    validationFunction.validateUser(InvestorSchema.deleteInvestorSchemas),
    InvestorController.deleteInvestor
)
exports.Router=Router;

















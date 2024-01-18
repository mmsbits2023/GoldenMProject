require('./db/connection');
const cors = require("cors");
const path = require("path");
const express = require("express");
const app = express();
const Port = process.env.PORT || 9006;
const InvestorRouter = require('./Routes/InvestorRoutes/InvestorRoutes');
const CoinRouter=require("./Routes/CoinRoutes/CoinRoutes");
const InvestorDetails = require("./Models/InvestorDetails");
const CoinDetails=require("./Models/CoinDetails");
const session = require('express-session');

const bodyParser = require('body-parser');


//Use the session middleware
app.use(session({
  secret: 'abcdefghijklmnopqrstuvwxyzabcdef', // Change this to a secure random string
  resave: false,
  saveUninitialized: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/investor',InvestorRouter.Router);
app.use('/coin',CoinRouter.Router);






  const mongoose = require('mongoose');
  app.get('/getWalletAddress/:id', async (req, res, next) => {
    try {
      const investorId = req.params.id;
  //console.log(investorId);
      // Check if the provided ID is a valid ObjectId
      if (!mongoose.Types.ObjectId.isValid(investorId)) {
        return res.status(400).json({
          status: 'FAILURE',
          message: 'Invalid ObjectId',
        });
      }
  
      // Find the investor details based on the provided ID
      const investorDetails = await InvestorDetails.findById(investorId);
  
      if (!investorDetails) {
        return res.status(404).json({
          status: 'FAILURE',
          message: 'Investor data not found',
        });
      }
  
      // Extract the wallet address from the investor details
      const walletAddress = investorDetails.walletAddress;
      const verificationCode=investorDetails.verificationCode;
      
      // Return the wallet address in the response
      res.json({
        status: 'SUCCESS',
        message: 'Get wallet address by ID',
          data: {
          investorId: investorDetails._id,
          walletAddress: walletAddress,
          verificationCode:verificationCode,
          
           
        },
       
      });
    } catch (error) {
      next(error);
    }
  });
 
  



app.listen(Port, () => { 
    console.log(`Server is running on port number ${Port}`)
})
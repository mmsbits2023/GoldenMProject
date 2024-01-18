const { request, response } = require("express");
const universalFunction = require("../Functions/universalFunction");
const CoinDetails=require("../Models/CoinDetails");
const InvestorDetails=require("../Models/InvestorDetails");
const jwt = require("jsonwebtoken");
const secretyKey = "abcdefghijklmnopqrstuvwxyzabcdef";


exports.CoinDetails=(async(request,response,next)=>{
    try{
        const userid=request.user;
        console.log(userid);
        const {
            coinNumber,
           
        } =request.body;
const CoinData=await CoinDetails.find({
   coinNumber:coinNumber ,
   
});

  if(CoinData>0){
    return response.status(404).send
({
    status:"FAILURE",
    message:"Coin Details already add here.."
}) 
 }

 const CoinDetailsCheck=new  CoinDetails();
 
 
 CoinDetailsCheck.coinNumber=coinNumber;

 console.log("CoinDetails",CoinDetails);

 const CoinDetails1=CoinDetailsCheck.save(
    async function( error,saveResult){
        if(error){throw new Error(error);}
        
        let responseData={
            status:"SUCCESS",
            message:"Coin Details added successfully",
            data:[]
        };
        universalFunction.sendResponse(request,response,responseData,next);
    }
 )
    }catch(error){
        console.log(error);
        next(error);
    }
});


exports.CoinDetailsData=(async (req, res) => {
  const userid=request.user;
  console.log(userid);
        const coinDetails = Array.from({ length: 10 }, (_, index) => {
        const coinNumber = index + 1;
        const coinWeight = 1.45 * coinNumber;
        const coinValue = coinNumber * 1000;
        const coinToken = coinNumber * 10000;
      
    
        return {
          coinNumber,
          coinWeight,
          coinValue,
          coinToken,
  
         
        };
        
      });
      
    res.json(coinDetails);
  });


  
exports.CoinCalculation = async (req, res) => {
    const { coinNumber} = req.body;
  

    if (!coinNumber || isNaN(coinNumber) || coinNumber < 1 || coinNumber > 10) {
      return res.status(400).json({ error: 'Invalid coinNumber or email' });
    }
  
    try {
      
   
 
    // Extract userId from the InvestorDetails document
  
      const coinWeight = 1.45 * coinNumber;
      const coinValue = coinNumber * 1000;
      const coinToken = coinNumber * 10000;
  
      // Save the data in MongoDB using the Coin model
      const newCoin = new CoinDetails({
        
        coinNumber,
        coinWeight,
        coinValue,
        coinToken,
    
      });
  
      await newCoin.save();
  
      res.json({
        coinNumber,
        coinWeight,
        coinValue,
        coinToken,
      
        
      });
    } catch (error) {
      console.error('Error calculating and saving coin data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
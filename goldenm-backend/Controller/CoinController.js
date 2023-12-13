const universalFunction = require("../Functions/universalFunction");
const CoinDetails=require("../Models/CoinDetails");


exports.CoinDetails=(async(request,response,next)=>{
    try{
        const {
            coinNumber,
            coinValue,
            coinWeight,
            coinToken,   
        } =request.body;
const CoinData=await CoinDetails.find({
   coinNumber:coinNumber 
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
 CoinDetailsCheck.coinValue=coinValue;
 CoinDetailsCheck.coinWeight=coinWeight;
 CoinDetailsCheck.coinToken=coinToken;

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
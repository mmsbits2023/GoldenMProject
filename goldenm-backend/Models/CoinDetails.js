const mongoose=require("mongoose");
const InvestorDetails = require("./InvestorDetails");
//const crypto=require("crypto");

const CoinSchemas=new mongoose.Schema({
userId:{
    type:mongoose.ObjectId,
   ref:InvestorDetails, 
},
coinNumber:{
    type:String,
    //required:true,
},
coinValue:{
    type:String,
   // required:true,
},
coinWeight:{
    type:String,
   // required:true,
},
coinToken:{
    type:String,
    //required:true,
}
});

module.exports=new mongoose.model("CoinDetails",CoinSchemas);

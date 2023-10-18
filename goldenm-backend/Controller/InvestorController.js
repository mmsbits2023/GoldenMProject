const InvestorDetails = require("../Models/InvestorDetails");
const universalFunction = require('../Functions/universalFunction');
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const secretyKey = "abcdefghijklmnopqrstuvwxyzabcdef";
const accountSid = 'ACa16c4cd259bbe48c80d9aa4f14c831ce';
const authToken = '94d140d930cbd7c100d6986d2b66a723';
const twilioPhoneNumber = '+12315359876';

const client = require('twilio')(accountSid, authToken);

exports.registerInvestor = (async (request, response, next) => {
    try {
        
        const {
            firstName,
            middleName,
            lastName,
            phoneNumber,      
            email,
            mpin,
            photoId,
            walletAddress,
            country,
            city,
            code
        } = request.body;
        
        const InvestorData = await InvestorDetails.find({ phoneNumber: phoneNumber }).countDocuments();
        if (InvestorData > 0) {
            return response.status(409).send({
                status: "FAILURE",
                message: "Investor mobile number already exist"
            })
        }
       
        const InvestorDetailsCheck = new InvestorDetails();
        InvestorDetailsCheck.firstName = firstName;
        InvestorDetailsCheck.middleName = middleName;
        InvestorDetailsCheck.lastName = lastName;
        InvestorDetailsCheck.phoneNumber = phoneNumber;
        InvestorDetailsCheck.email = email;
        InvestorDetailsCheck.password = mpin;
        InvestorDetailsCheck.photoId = photoId;
        InvestorDetailsCheck .walletAddress =walletAddress;
        InvestorDetailsCheck.country = country;
        InvestorDetailsCheck.city = city;
        console.log("InvestorDetails", InvestorDetailsCheck);
       
        const Investordetails1 = InvestorDetailsCheck.save(async function (error, saveResult) {
            if (error) { throw new Error(error); }
              
            let responseData = {
                status: "SUCCESS",
                message: "Investor  registered successfully",
                data: []
                            
            }; universalFunction.sendResponse(request, response, responseData, next);
       
       function generateRandomCode(length) {
         return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
        }

  // Generate a 6-digit random code
const randomCode = generateRandomCode(6);
console.log('Random Code:', randomCode);


            function sendSMS() {
                client.messages
                    .create({
                        body: `Your verification code is: ${randomCode}`,
                        from: twilioPhoneNumber,
                        to: phoneNumber,
                    })
                    .then((message) => console.log('SMS sent:', message.sid))
                    .catch((error) => console.error('Error sending SMS:', error));
            } sendSMS();
        }     
        );
     } catch (error) {
        console.log(error);
        next(error);
          }
});          

exports.loginInvestor= async function (request, response, next) {
    try {
        const { email,phoneNumber,mpin} = request.body;
        const InvestorData = await InvestorDetails.find({ phoneNumber:phoneNumber});

        if (InvestorData.length === 0) {
            return response.status(400).send({
                status: "FAILURE",
                message: " Invalid  Investor phone number "
            })
        }
        
        if (!InvestorData[0].authenticate(mpin)) {
            let responseData = {
                status: "FAILURE",
                message: "Invalid Password",
                data: { verified: false }
            };
            universalFunction.sendResponse(request,response, responseData, next);
        } else {
            const salt = crypto.randomBytes(16).toString("hex");
            InvestorData[0].authToken = salt;

            InvestorData[0].save(async (error, result) => {
                if (error) {
                    throw new Error(error);
                }
                var jsonPayload = {
                    phoneNumber: phoneNumber,
                    email: email,
                    mpin:mpin
                    
                };
                const jwtData = jwt.sign(jsonPayload, `${secretyKey}-${salt}`, {
                    expiresIn: "1d",
                });
                
               console.log("jwtData",jwtData)

                let responseData = {
                    status: "SUCCESS",
                    message: "Investor LOgin successfully",
                    data: {
                        verified: "true",
                        phoneNumber:phoneNumber,
                        authToken: jwtData,
                    },
                };
                universalFunction.sendResponse(request, response, responseData, next);
           
            })
        }

    } catch (error) {
        next(error);
    }

};

exports.InvestorLogout = async (request, response, next) => {
    try {
        const { phoneNumber,email,mpin } = request.body;
        
        const InvestorData = await InvestorDetails.find({ phoneNumber: phoneNumber,email:email });
        
        if (InvestorData.length === 0) { 
            return response.status(404).send({
                status: "FAILURE",
                message:"Investor Data not found here..."
            })
        }
        
        console.log("All Investor details here....", InvestorData[0]);
        request.user = InvestorData[0];
        console.log("authToken of Investor is", request.user.authToken);
                
        const data = await InvestorDetails.updateOne({ phoneNumber: phoneNumber },{ $unset: { authToken: "" } })
        
        
        let responseData = {
            status: "SUCCESS",
            message: "Investor Logout Successfully",
            data: []
        }
        universalFunction.sendResponse(request, response, responseData, next);
  
    } catch (error) {
        console.log(error);
        next(error);
    }
};

 exports.getAllInvestorList=async function (request,response,next){
    try{
       
       var InvestorDetailsList=await InvestorDetails.find();    
    
       if(InvestorDetailsList.length === 0 ){
        return response.status(400).send({
            status:"FAILURE",
            message:" Investor  data not  found"
        }); 
       }
       let responseData={
        status:"SUCCESS",
        message:"List of all Investor",
        data:{
            InvestorDetailsList:InvestorDetailsList,
            count:InvestorDetailsList.length,
        },
       };
       universalFunction.sendResponse(request,response,responseData,next);

    }catch(error){
        next(error);
    }
  };
 
exports.getOneInvestorDetails = async function (request, response, next) {
    try{
       const {phoneNumber}=request.body;
            
      const InvestorDetails1= await InvestorDetails.find({phoneNumber:phoneNumber});
           
        if (InvestorDetails1.length === 0)
       {
        return response.status(404).send({
            status:"FAILURE",
            message:" Investor data not  found"
        }); 
        }
        console.log("Investor...data", InvestorDetails1);
       let responseData={
        status:"SUCCESS",
        message:"Get one investor details",
        data:InvestorDetails1
     }
     universalFunction.sendResponse(request,response,responseData,next);

    }catch(error){
        next(error);
    }
  };

    exports.updateInvestorDetails=async function(request,response,next){
    try{
      const {
            firstName,
            middleName,
            lastName,
            phoneNumber,
            email,
            photoid,
            country,
             city,
                    
            } = request.body;
                              
       const InvestorDetails1=await InvestorDetails.findOne({phoneNumber:phoneNumber});
        console.log("InvestorDetails....",InvestorDetails);   

         if(InvestorDetails1.length === 0){
        return response.status(400).send({
            status:"FAILURE",
            message:" Investor data not  found"
        }); 
      }
        InvestorDetails1.firstName=firstName;
        InvestorDetails1.middleName=middleName;
        InvestorDetails1.lastName=lastName;
        InvestorDetails1.phoneNumber = phoneNumber;
        InvestorDetails1.email =emailmail;
        InvestorDetails1.photoid = photoid;
        InvestorDetails1.email = email;
        InvestorDetails1.country= country;
        InvestorDetails1.city = city; 

      
      const InvestorData= await InvestorDetails.save(function(error,saveResult){
        if(error){throw new Error (error)}
        let responseData={
            status:"SUCCESS",
            message:"Investor details updated successfully",
            data:InvestorDetails1
        }
        universalFunction.sendResponse(request,response,responseData,next);
    });
    }catch(error)
    {
        next(error);
    }
  }; 

  exports.deleteInvestor=async function(request,response,next){
    try{
      const {phoneNumber}=request.body;
                
       const InvestorData=await InvestorDetails.deleteOne({phoneNumber:phoneNumber});
        console.log(InvestorData);   

         if(InvestorData.length === 0){
        return response.status(400).send({
            status:"FAILURE",
            message:" Investor data not  found"
        }); 
        }
         
        const InvestorData1 = await InvestorDetails();    
         
        InvestorData.phoneNumber = phoneNumber;

        let responseData = {
            status:"SUCCESS",
            message:"Delete investor details successfully",
            data:[]
        }
        universalFunction.sendResponse(request,response,responseData,next);
  
    }catch(error)
    {
        next(error);
    }
  };

 
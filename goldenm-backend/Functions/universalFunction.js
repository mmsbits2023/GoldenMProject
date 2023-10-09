const InvestorDetails = require("../Models/InvestorDetails");
const secretyKey = "abcdefghijklmnopqrstuvwxyzabcdef";
const jwt = require("jsonwebtoken");
module.exports = {
  sendResponse: async function (request, response, responseData, next) {
    response.status(201).send(responseData);
  },
      
  authenticateUser: async function (request, response,error, next) {
    try {
      console.log("Hello Authentication...!");
      console.log("authentication code", request.body)
      if (request && request.headers && request.headers.authorization) {
        // if(request.body !== undefine){}
        
        if (Object.keys(request.body).length === 0 && request.body.constructor === Object) {
          var { phoneNumber } = request.query;
          
        } else {
          var { phoneNumber } = request.body
          
        }
        //const token1 = request.cookies.jwt;
        const token = request.headers.authorization;
        console.log(token);
        console.log("Incoming data", request.body);
                 
        const InvestorCheck = await InvestorDetails.find({ phoneNumber: phoneNumber });
        /* request.token = token;
        request.agentCheck = agentCheck;*/
                        
        if (InvestorCheck.length === 0) {
          return response.status(401).send({
            status: "FAILURE",
            message: " Authentication failed! please login again"
          })
        }
      }
          console.log(error);
              
      jwt.verify(
        token, `${secretyKey}-${InvestorCheck[0].authToken}`,
        async function (error, data) {
                     
          console.log(error);
          if (error) {
            return response.status(401).send({
              status: "FAILURE",
              message: " Authentication failed! jwt token not match"
            })
               
                      
          } else {
                            
            console.log("jwt verification successfully");
            request.user = InvestorCheck[0];
                    
            next();
          }
        }
      )
    }
    catch (error) {
      console.log(error);
      return response.status(401).send({
        status: "FAILURE",
        message: "Authentication failed! please login again",
      });
        
    }
  }
}  



      
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
                 
        const userCheck = await InvestorDetails.find({ phoneNumber: phoneNumber });
        request.token = token;
        request.userCheck = userCheck;
                        
        if (userCheck.length === 0) {
          return response.status(401).send({
            status: "FAILURE",
            message: " Authentication failed! please login again"
          })
        }
      
          console.log(error);
              
      jwt.verify(
        token, `${secretyKey}-${userCheck[0].authToken}`,
        async function (error, data) {
                     
          console.log(error);
          if (error) {
            return response.status(401).send({
              status: "FAILURE",
              message: " Authentication failed! jwt token not match"
            })
               
                      
          } else {
                            
            console.log("jwt verification successfully");
            request.user = userCheck[0];
               console.log("data",request.user)     
            next();
          }
        }
      )}
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
  /*authenticateUser: async function (request, response, next) {
    try {
      console.log("Hello Authentication...!");
      console.log("authentication code", request.body);
  
      if (request && request.headers && request.headers.authorization) {
        let phoneNumber;
  
        if (Object.keys(request.body).length === 0 && request.body.constructor === Object) {
          phoneNumber = request.query.phoneNumber;
        } else {
          phoneNumber = request.body.phoneNumber;
        }
  
        const token = request.headers.authorization;
        console.log(token);
        
// Decode the token
const decoded = jwt.decode(token, { complete: true });

// Access the decoded fields
const payload = decoded.payload;

console.log('Decoded Payload:', payload);
console.log('User Phone Number:', payload.phoneNumer);
console.log('User Email:', payload.email);
console.log('User ID:', payload.userId);
console.log('Issued At:', payload.iat);
console.log('Expiration Time:', payload.exp);
        console.log("Incoming data", request.body);
  
        const userCheck = await InvestorDetails.find({ phoneNumber: phoneNumber });
  
        if (userCheck.length === 0) {
          return response.status(401).send({
            status: "FAILURE",
            message: "Authentication failed! User not found",
          });
        }
  
        jwt.verify(token, `${secretyKey}-${userCheck[0].authToken}`, (error, data) => {
          console.log(error);
  
          if (error) {
            return response.status(401).send({
              status: "FAILURE",
              message: "Authentication failed! JWT token does not match",
            });
          } else {
            console.log("JWT verification successful");
            request.user = userCheck[0];
            console.log("User data", request.user);
            next();
          }
        });
      }
    } catch (error) {
      console.log(error);
      return response.status(401).send({
        status: "FAILURE",
        message: "Authentication failed! Please login again",
      });
    }
  }
}*/




      
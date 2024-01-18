
exports.InvestorRegisterSchema={
    type:"object",
    properties:{
        phoneNumber:{
            type:"string",
           // minLength:10,
            //maxLength:13,
            //pattern:"^[0-9()-.s]+$",
        },
        mpin:{
            type:"string",
            minLength:9,
            maxLength:16,
            //pattern:"^[0-9()-.s]+$",
           // pattern:"(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!])^[0-9()-.s]+$"
      },
      firstName: {
        type: "string",
        pattern: "^[A-Z,a-z]",
        errorMessage:"Invalid firstname "
      },
      middleName: {
        type: "string",
        pattern: "^[A-Z,a-z]",
        errorMessage:"Invalid middleName"
      },
       lastName: {
        type: "string",
        pattern: "^[A-Z,a-z]",
        errorMessage:"Invalid lastName "
      },
       photoId: {
        type: "string",
        pattern: "^[0-9()-.s]+$",
        errorMessage:"Invalid photoid "
      },
        country: {
        type: "string",
        pattern: "^[A-Z,a-z]",
        errorMessage:"Invalid country "
      },
        city: {
        type: "string",
        pattern: "^[A-Z,a-z]",
        errorMessage:"Invalid city"
      }, 
     walletAddress: {
        type: "string",
        minLength:16, 
        maxLength:16,
        pattern:"^[0-9()-.s]+$",
        errorMessage:"Wallet address must be required 16 digit"
      }
    },
    required: ["phoneNumber","mpin"]
};

exports.InvestorLoginSchema = {
    type: "object",
    properties: {
        phoneNumber: {
            type: "string",
          //  minLength: 10,
           // maxLength: 10,
            //pattern: "^[0-9()-.s]+$",
        },
        mpin: {
            type: "string",
            minLength: 9,
            maxLength: 13,
           //pattern: "^[0-9()-.s]+$"
            //pattern:"(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!])^[0-9()-.s]+$"
        }
    },
    required: ["phoneNumber", "mpin"]
};

exports.getAllInvestorSchemas = {

  type: "object",
  properties: {
    phoneNumber: {
      type: "string",
      minLength: 10,
      maxLength: 10,
      pattern: "^[0-9()-.s]+$",
    },
    
  },
  required: ["phoneNumber"],
};

exports.getOneInvestorSchemas = {

  type: "object",
  properties: {
    phoneNumber: {
      type: "string",
      minLength: 10,
      maxLength: 10,
      pattern: "^[0-9()-.s]+$",
    },
    
  },
  required: ["phoneNumber"],
};

exports.updateInvestorSchemas = {

  type: "object",
  properties: {
    phoneNumber: {
      type: "string",
      minLength: 10,
      maxLength: 10,
      pattern: "^[0-9()-.s]+$",
    },
    
  },
  required: ["phoneNumber"],
};

exports.deleteInvestorSchemas = {

  type: "object",
  properties: {
    phoneNumber: {
      type: "string",
      minLength: 10,
      maxLength: 10,
      pattern: "^[0-9()-.s]+$",
    },
    
  },
  required: ["phoneNumber"],
};

exports.logoutInvestorSchemas = {

  type: "object",
  properties: {
    phoneNumber: {
      type: "string",
      minLength: 10,
      maxLength: 10,
      pattern: "^[0-9()-.s]+$",
    },
    
  },
  required: ["phoneNumber"],
};

//CoinDetails 

exports.addCoinDetailsSchemas = {

  type: "object",
  properties: {
    coinNumber: {
      type: "string",
      minLength: 1,
      maxLength: 2,
      pattern: "^[0-9()-.s]+$",
    },
    coinValue: {
      type: "string",
      //minLength: 1,
     // maxLength: 2,
      pattern: "^[0-9()-.s]+$",
    },
    coinWeight: {
      type: "string",
     // minLength: 1,
      //maxLength: 2,
      pattern: "^[0-9()-.s]+$",
    },
    coinToken: {
      type: "string",
     // minLength: 1,
     // maxLength: 2,
      pattern: "^[0-9()-.s]+$",
    },
    
  },
  required: ["coinNumber"],
};
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/GoldenInvestorDetails")
    .then(() => { 
        console.log("Connection is successfully..");
    })
    .catch(() => { 
        console.log("No Connection here..")
    })
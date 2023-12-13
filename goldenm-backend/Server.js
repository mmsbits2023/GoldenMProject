require('./db/connection');
const cors = require("cors");
const path = require("path");
const express = require("express");
const app = express();
const Port = process.env.PORT || 9006;
const InvestorRouter = require('./Routes/InvestorRoutes/InvestorRoutes');
const CoinRouter=require("./Routes/CoinRoutes/CoinRoutes");


const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/investor',InvestorRouter.Router);
app.use('/investor',CoinRouter.Router);




app.listen(Port, () => { 
    console.log(`Server is running on port number ${Port}`)
})
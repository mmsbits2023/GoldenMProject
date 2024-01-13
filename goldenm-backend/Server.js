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



app.get('/coinDetails', (req, res) => {
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
app.post('/calculate', (req, res) => {
    const { coinNumber } = req.body;
  
    if (!coinNumber || isNaN(coinNumber) || coinNumber < 1 || coinNumber > 10) {
      return res.status(400).json({ error: 'Invalid coinNumber' });
    }
  
    const coinWeight = 1.45 * coinNumber;
    const coinValue = coinNumber * 1000;
    const coinToken = coinNumber * 10000;
  
    res.json({
      coinNumber,
      coinWeight,
      coinValue,
      coinToken,
    });
  });
app.listen(Port, () => { 
    console.log(`Server is running on port number ${Port}`)
})
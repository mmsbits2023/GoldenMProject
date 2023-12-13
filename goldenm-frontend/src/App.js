import React from "react";
import { Routes, Route} from 'react-router-dom';
//import Layout from "./Component/Layout";
import InvestorRegister from './Pages/InvestorRegister';
import "./App.css";
import Header from "./Component/Header";
import  Footer from "./Component/Footer";
import InvestorLogin from "./Pages/InvestorLogin";
import HomePage from './Pages/HomePage';
import InvestorLogout from "./Pages/InvestorLogout";
import BuyGoldCoin from "./Pages/BuyGoldCoin";
import AddCoinDetails from "./Pages/AddCoinPages/AddCoinDetails";
import PaymentDetails from "./Pages/PaymentDetails";
import Add2Coin from "./Pages/AddCoinPages/Add2Coin";
import Add3Coin from "./Pages/AddCoinPages/Add3Coin";
import Add4Coin from "./Pages/AddCoinPages/Add4Coin";
import Add5Coin from "./Pages/AddCoinPages/Add5Coin";
import Add6Coin from "./Pages/AddCoinPages/Add6Coin";
import Add7Coin from "./Pages/AddCoinPages/Add7Coin";
import Add8Coin from "./Pages/AddCoinPages/Add8Coin";
import Add9Coin from "./Pages/AddCoinPages/Add9Coin";
import Add10Coin from "./Pages/AddCoinPages/Add10Coin";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/login' element={<InvestorLogin/>} />
        <Route path='/register' element={<InvestorRegister/>} />
        <Route path='/logout' element={<InvestorLogout />} />
        <Route path='/buyGoldCoin' element={ <BuyGoldCoin/>} />
        <Route path='/addCoinDetails' element={ <AddCoinDetails/>} />
        <Route path='/add2Coin' element={ <Add2Coin/>} />
        <Route path='/add3Coin' element={ <Add3Coin/>} />
        <Route path='/add4Coin' element={ <Add4Coin/>} />
        <Route path='/add5Coin' element={ <Add5Coin/>} />
        <Route path='/add6Coin' element={ <Add6Coin/>} />
        <Route path='/add7Coin' element={ <Add7Coin/>} />
        <Route path='/add8Coin' element={ <Add8Coin/>} />
        <Route path='/add9Coin' element={ <Add9Coin/>} />
        <Route path='/add10Coin' element={ <Add10Coin/>} />
        <Route path='/paymentDetails' element={ <PaymentDetails/>} />
      </Routes> 
      <Footer/>
  </div>
   
    
  );
}

export default App;

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
import AddCoinDetails from "./Pages/AddCoinDetails";
import PaymentDetails from "./Pages/PaymentDetails";


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
        <Route path='/paymentDetails' element={ <PaymentDetails/>} />
      </Routes> 
      <Footer/>
  </div>
   
    
  );
}

export default App;

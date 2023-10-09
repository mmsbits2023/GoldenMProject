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
      </Routes> 
      <Footer/>
  </div>
   
    
  );
}

export default App;

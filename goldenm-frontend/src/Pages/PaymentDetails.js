
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const PaymentDetails = () => {
  
  const location = useLocation();
 // const { selectedCoinData, walletAddressData } = location.state || {};
  const selectedCoinData= location.state && location.state.selectedCoinData;
  const {  coinToken,waVerificationCode} = selectedCoinData;
  console.log("data....selected here....",selectedCoinData);
  console.log(waVerificationCode.data.walletAddress);
  
  const walletAddressData = location.state && location.state.walletAddressData;
console.log(walletAddressData);
  

  return (
    <div>
      <h2>Payment Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Wallet Address</th>
            <th>Coin Token</th>
            <th>Referral Code</th>
            <th>Value 9%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{waVerificationCode.data.walletAddress}</td>
            <td>{coinToken}</td>
            <td>{walletAddressData}</td>
             <td>{coinToken * 0.09}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentDetails;


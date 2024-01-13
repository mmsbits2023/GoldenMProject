/*import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentDetails = () => {
  // Access the selected coin data from the location state
  const location = useLocation();
  const selectedCoinData = location.state && location.state.selectedCoinData;

  if (!selectedCoinData) {
    // Handle the case where there is no selected coin data
    return <div>No data available</div>;
  }


  return (
    <div>
      <h2>Payment Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Coin Number</th>
            <th>Coin Token</th>
            <th>Wallet Address</th>
            <th>Referral Code</th>
            <th>Value 9%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedCoinData.coinNumber}</td>
            {/*<td>{selectedCoinData.coinValue}</td>
            <td>{selectedCoinData.coinWeight}</td>}
            <td>{selectedCoinData.coinToken}</td>
          </tr>
        </tbody>
      </table>

      {/* Add additional content or actions related to payment details }
    </div>
  );
};

export default PaymentDetails;*/

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentDetails = () => {
  const location = useLocation();
  const selectedCoinData = location.state && location.state.selectedCoinData;
  const [walletAddress, setWalletAddress] = useState('');
  const [refrralCode,setRefrralCode]=useState('');

  useEffect(() => {
    const fetchWalletAddress = async () => {
      try {
        if (selectedCoinData) {
          const apiUrl = `http://localhost:9006/getWalletAddress/65a263e6c419cc124c9badbc`;
          
          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();

          const fetchedWalletAddress = data.data.walletAddress;
          const fetchrefrralcode=data.data.verificationCode;
          setWalletAddress(fetchedWalletAddress);
          setRefrralCode(fetchrefrralcode);
        }
      } catch (error) {
        console.error('Error fetching wallet address:', error.message);
      }
    };

    fetchWalletAddress();
  }, [selectedCoinData]);

  if (!selectedCoinData) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h2>Payment Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Coin Number</th>
            <th>Coin Token</th>
            <th>Wallet Address</th>
            <th>Referral Code</th>
            <th>Value 9%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedCoinData.coinNumber}</td>
            <td>{selectedCoinData.coinToken}</td>
            <td>{walletAddress}</td>
            <td>{refrralCode}</td>
            <td>{selectedCoinData.coinToken*0.09}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentDetails;


import React from 'react';
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
            <td>{selectedCoinData.coinWeight}</td>*/}
            <td>{selectedCoinData.coinToken}</td>
          </tr>
        </tbody>
      </table>

      {/* Add additional content or actions related to payment details */}
    </div>
  );
};

export default PaymentDetails;

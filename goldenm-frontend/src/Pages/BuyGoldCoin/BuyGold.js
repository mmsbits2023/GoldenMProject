import React, { useState } from 'react';
import axios from 'axios';

const BuyGold = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [purchaseDetails, setPurchaseDetails] = useState(null);

    const handleBuyGold = async () => {
        try {
            const token = localStorage.getItem('token');

            // Use the token to make authenticated requests to the backend
            const res = await axios.post(
                'http://localhost:5000/api/buy-gold',
                { selectedOption },
                { headers: { 'x-auth-token': token } }
            );

            setPurchaseDetails(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <h2>Buy Gold</h2>
            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                {/* Options 1 to 10 */}
                {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                        {num + 1}
                    </option>
                ))}
            </select>
            <button onClick={handleBuyGold}>Buy</button>

            {purchaseDetails && (
                <div>
                    <h3>Purchase Details</h3>
                    <p>Token: {purchaseDetails.token}</p>
                    <p>Wallet Address: {purchaseDetails.walletAddress}</p>
                    {/* Display other details as needed */}
                </div>
            )}
        </div>
    );
};

export default BuyGold;
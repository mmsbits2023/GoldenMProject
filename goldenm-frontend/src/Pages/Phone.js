import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

function Phone() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleOnChange = (value, data) => {
    // `value` contains the selected phone number with country code
    setPhoneNumber(value);
  };

  return (
    <div>
      <h1>Country Code Picker with Phone Input</h1>
      <PhoneInput
        country={'us'} // Default country (you can set to any country code)
        value={phoneNumber}
        onChange={handleOnChange}
      />
      <div>
        <h2>Selected Phone Number:</h2>
        <p>{phoneNumber}</p>
      </div>
    </div>
  );
}

export default Phone;

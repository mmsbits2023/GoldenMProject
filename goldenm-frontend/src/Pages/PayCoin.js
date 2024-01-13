import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import axios from 'axios'; // Import axios for making HTTP requests

const PayCoin = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    _id:'',
    coinNumber: '',
    coinValue: '',
    coinWeight: '',
    coinToken: '',
  });

  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    if (selectedOption) {
      // Fetch coin details when the selected option changes
      fetchCoinDetails(selectedOption);
    }
  }, [selectedOption]);

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
  };

  const fetchCoinDetails = async (coinNumber) => {
    try {
      const response = await axios.post('http://localhost:9006/calculate', { coinNumber });
      const details = response.data;

      setData({
        _id:details._id,
        coinNumber: details.coinNumber,
        coinValue: details.coinValue,
        coinWeight: details.coinWeight,
        coinToken: details.coinToken,
      });
    } catch (error) {
      console.error('Error fetching coin details:', error);
    }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Your existing validation logic
    const validationErrors = {};
    if (!data.coinNumber) {
      validationErrors.coinNumber = 'Coin Number is required';
    }
    if (!data.coinValue) {
      validationErrors.coinValue = 'CoinValue is required';
    }
    if (!data.coinWeight) {
      validationErrors.coinWeight = 'Coin Weight is required';
    }
    if (!data.coinToken) {
      validationErrors.coinToken = 'CoinToken is required';
    }
    setErrors(validationErrors);
  
    // If there are validation errors, you might want to return and not proceed further
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
  
    /* Your existing fetch logic*/
    try {
      const response = await fetch('http://localhost:9006/coinDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          coinNumber: data.coinNumber,
          coinValue: data.coinValue,
          coinWeight: data.coinWeight,
          coinToken: data.coinToken,
          _id:data._id,
        }),
      });
  
      const result = await response.json();
  
      if (result.status === 422 || !data) {
        window.alert('Invalid data');
        console.log('Invalid data');
      } else {
        window.alert('Add Successfully');
        console.log('Add Successfully');
        navigate('/paymentDetails');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };
  const handlePaymentDetails = () => {
    // Navigate to the "paymentDetails" route with the selected coin data
    navigate('/paymentDetails', { state: { selectedCoinData: data } });
  };

  return (
    <div>
      <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
        <Container>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-2 col-xl-6 col-sm-12">
              <Card.Body className="p-0">
                <section className="w-full mx-auto items-center justify-center ">
                  <Form onSubmit={handleSubmit} className="shadow pt-2">
                    <h2 className="text-center p-3 fw-bold">Coin Details</h2>

                    <div className="mb-1 register" style={{ width: '70%', textAlign: 'center', marginLeft: '100px' }}>
                      <label htmlFor="coinNumberId" className="form-label">
                        Select Coin Number
                      </label>
                      <select
                        name="coinNumber"
                        id="coinNumberId"
                        className="form-select"
                        onChange={handleOptionChange}
                        value={selectedOption}
                      >
                        {[...Array(10)].map((_, index) => (
                          <option key={index + 1} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Display details based on the selected option */}
                    <div className="mb-1 register" style={{ width: '70%', textAlign: 'center', marginLeft: '100px' }}>
                      <p>Coin Value: {data.coinValue}</p>
                      <p>Coin Weight: {data.coinWeight}</p>
                      <p>Coin Token: {data.coinToken}</p>
                    </div>

                    
                    <div className="row-2" style={{ width: '30%', textAlign: 'center', marginLeft: '200px' }}>
        <Button variant="outlined" className="p-1 bg-primary text-white" onClick={handlePaymentDetails}>
          Payment 
        </Button>
      </div><br/><br/>
                    {/* Your existing buttons */}
                  </Form>
                </section>
              </Card.Body>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PayCoin;

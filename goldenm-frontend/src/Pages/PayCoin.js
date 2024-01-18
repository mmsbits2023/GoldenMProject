import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import axios from 'axios'; // Import axios for making HTTP requests
import { useLocation } from 'react-router-dom';

const PayCoin = () => {

const location=useLocation();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
  
    coinNumber: '',
    coinValue: '',
    coinWeight: '',
    coinToken: '',
    waVerificationCode:'',
    verificationCode:'',
    walletAddress:''
    
  });
 
  const [selectedOption, setSelectedOption] = useState('');
const [dataWallet,setDataWallet]=useState('');
  useEffect(() => {
    if (selectedOption) {
      const phoneNumber = location.state && location.state.phoneNumber;
      // Fetch coin details when the selected option changes
      fetchCoinDetails(selectedOption,phoneNumber);
    }
  }, [selectedOption,location.state]);

  const handleInput = async(event) => {
    const {name,value}=event.target;
    setData({ ...data, [name]:value });

   
    // Assuming verificationCode is the one triggering the fetch
    if (name === 'verificationCode') {
      try {
        // Fetch data from the specified API
        const response2 = await axios.get(`http://localhost:9006/investor/getWalletAddress/${value}`);
        const walletAddressData = response2.data;
       console.log("referral code walletAddress",walletAddressData);
       console.log(walletAddressData.data.walletAddress);
       const dataWallet=walletAddressData.data.walletAddress;
        // Update state with the fetched data
        setData((prevData) => ({
          ...prevData,
          walletAddress: walletAddressData.walletAddress,
          // Add other properties as needed based on the API response
        }));
        setDataWallet(dataWallet);
      } catch (error) {
        console.error('Error fetching wallet address:', error);
        // Handle error appropriately, e.g., show an error message to the user
      }
    }
  }
  
  

  
  const handleOptionChange = (event) => {
      const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
  };
/********************************** */
  
  /************************* */
  const fetchCoinDetails = async (coinNumber,phoneNumber) => {
    try {
      const response = await axios.post('http://localhost:9006/coin/calculate', { coinNumber });
      const details = response.data;

       // Fetch WA verification code
    const waVerificationCodeResponse = await axios.get(`http://localhost:9006/investor/getWAVerificationCode/${phoneNumber}`);
    const waVerificationCode = waVerificationCodeResponse.data;

      setData({
       
        coinNumber: details.coinNumber,
        coinValue: details.coinValue,
        coinWeight: details.coinWeight,
        coinToken: details.coinToken,
        waVerificationCode:waVerificationCode,
        
        
        });
    } catch (error) {
      console.error('Error fetching coin details:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    
    /* Your existing fetch logic*/
    try {
          const response = await fetch('http://localhost:9006/coin/coinDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
                body: JSON.stringify({
          coinNumber: data.coinNumber,
          coinValue: data.coinValue,
          coinWeight: data.coinWeight,
          coinToken: data.coinToken,
         
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
      
    }
  };
  const handlePaymentDetails = () => {
  
    // Navigate to the "paymentDetails" route with the selected coin data
    navigate('/paymentDetails', { state:{ selectedCoinData: {...data,_id:data._id},
    walletAddressData: dataWallet,
    } });
    
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
                      <p>Coin Value:{data.coinValue}</p>
                      <p>Coin Weight:{data.coinWeight}</p>
                      <p>Coin Token:{data.coinToken}</p>
                      
                    </div>
                     
                    <div className="mb-1 register " style={{width:"70%",textAlign:"center",marginLeft:"100px"}}>             
                    <label htmlFor="refrralCode" className="form-label">
                    ReferralCode:</label>
                      <input 
                      type="text" 
                      name="verificationCode" 
                      className="form-control" 
                      id="verificationCode" //autocomplete="off"
                 onChange={handleInput}/>
                  {errors.referralCode && <span className='errorData'>{ errors.refrralCode}</span> }
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

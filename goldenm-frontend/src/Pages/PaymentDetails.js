import React, { useState} from 'react'
import Card from 'react-bootstrap/Card'  
import { Container } from '@mui/material'
import Button from '@mui/material/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { green } from '@mui/material/colors'
import { Form } from 'react-bootstrap'
//import PhoneInput from 'react-phone-input-2'
//import { AiFillInfoCircle } from 'react-icons/ai'



const PaymentDetails= () => {
  
 /* const navigate = useNavigate();
  const [data, setData] = useState({
      email:'',
      phoneNumber: '',
      mpin:''
  });
  const handleInput = (event) => { 
      setData({...data,[event.target.name]:event.target.value})
  }
  const [errors, setErrors] = useState('');
  const handleSubmit = async (e) => { 
      e.preventDefault();
      const validationErrors = {}
      if (!data.email) {
          validationErrors.email = "email is required"
      } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data.email)) {
          validationErrors.email="email is not valid"
      }

      if (!data.phoneNumber) {
          validationErrors.phoneNumber = 'PhoneNumber is required'
      } else if (data.phoneNumber.length <10) {
          validationErrors.phoneNumber="PhoneNumber should be at least 10 digit"
      }else if (data.phoneNumber.length >13) {
          validationErrors.phoneNumber="PhoneNumber should be at least 10 digit"
      }
      
      if (!data.mpin) {
          validationErrors.mpin = 'Password is required'
      } else if (data.mpin.length < 9) {
          validationErrors.mpin="Password should be at least 9char"
       }else if (data.mpin.length > 16 ) {
          validationErrors.mpin="Password should be at least 9 char"
       }
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
          const { email, phoneNumber, mpin } = data;
          const response = await fetch("http://localhost:9006/investor/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  email: email,
                  phoneNumber: phoneNumber,
                  mpin: mpin
              })
          });
          const result = await response.json();
          if (result.status === 422 || !data) {
              window.alert("Inavalid Login");
              console.log("Inavalid Login");
          }
          else {
              window.alert("Login Successfully");
              console.log("Successfully Login");
              navigate('/buyGoldCoin');
        
          
          }
      }
  }
  */
    
  return (
    <div>
      <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
      <Container>
        <div className=" row justify-content-center">
          <div className="col-md-6 col-lg-2 col-xl-6 col-sm-12">
            
                                             
                                      <div className="col-6 " style={{ width: "30%", textAlign: "center", marginLeft: "200px" }}>
                                <NavLink to="/pamentDetails" component={NavLink}>
                                  <Button variant="outlined" className="p-1">
                                    Payment Options  
                                  </Button>
                                </NavLink>
                              </div>
                            
                            
                        
                </div>
                </div>
              </Container>
          </div>
    </div>
  )
}

export default PaymentDetails

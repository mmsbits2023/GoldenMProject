import React, { useState} from 'react'
import Card from 'react-bootstrap/Card'  
import { Container } from '@mui/material'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { green } from '@mui/material/colors'
import { Form } from 'react-bootstrap'
import Select from 'react-select';
import { countries } from 'countries-list';
import { PhoneInput } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

const InvestorRegister = () => {
 /*Country list */     
const countryOptions = Object.keys(countries).map((countryCode) => ({
  value: countryCode,
  label: countries[countryCode].name,
}));
     const [selectedCountry, setSelectedCountry] = useState(null);
        const handleChange = (selectedOption) => {
            setSelectedCountry(selectedOption);
        };
  /*country code */
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);
  const handleChange1 = (value) => { 
    //const input = event.target.value;
    setPhoneNumber(value);
    setValid(validPhoneNumber(value));
  }
  const validPhoneNumber = (phoneNumber) => { 
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  }
  
  

  
  
  
  return (
    <div>
      <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
      <Container>
        <div className=" row justify-content-center">
          <div className="col-md-6 col-lg-2 col-xl-6 col-sm-12">
            {/* <CCard className="m-0"> */}
            <Card.Body className="p-0 ">
            <section className="w-full mx-auto items-center justify-center ">
                             <Form className="shadow pt-2">
                            <div className="text-center d-flex justify-content-center p-1">
                              {/* <Avatar className="items-center text-center" src="1.jpg" /> */}
                              <Avatar sx={{ bgcolor: green[500] }}></Avatar>
                            </div>
                            <h2 className="text-center p-3 fw-bold">Register Form</h2>
                            <div className='flex-container'>
                         <div className="mb-1 register ">             
                    <label htmlFor="FirstNameNameId" className="form-label">
                    FirstName</label>
                      <input type="text" name="firstName" className="form-control" id="FirstNameId" //autocomplete="off"
               />
                      </div>
                      <div className="mb-1 register ">
                <label htmlFor="MiddleNameId" className="form-label">
                    MiddleName</label>
                      <input type="text" name="middleName" className="form-control" id="MiddleNameId" //autocomplete="off"
              />
          </div>
                    </div>
            <div className='flex-container'>    
            <div className="mb-1 register">
                <label htmlFor="LastNameId" className="form-label">
                    LastName </label>
                      <input type="text" name="lastName" className="form-control" id="LastNameId" //autocomplete="off"
                        /></div>
                       <div className="mb-1 register">
                <label htmlFor="PhoneNumberId" className="form-label">
                    PhoneNumbber </label>
                      <input type="text" name="phoneNumber" className="form-control" id="PhoneNumberId" //autocomplete="off"
                     /></div>
                      
      
                                          </div>
                <div className='flex-container'>
                                          <div className="mb-1 register">             
                  <label htmlFor="EmailId" className="form-label">
                    Email</label>
                      <input type="text" name="email" className="form-control" id="EmailId" //autocomplete="off"
               />
           </div>
            
            <div className="mb-1 register">
                <label htmlFor="PasswordId" className="form-label">
                    Password</label>
                      <input type="password" name="password" className="form-control" id="PasswordId" //autocomplete="off"
              />
          </div></div>
          <div className='flex-container'>
            <div className="mb-1 register">
                <label htmlFor="PhotoId" className="form-label">
                    PhotoId </label>
                      <input type="text" name="photoId" className="form-control" id="PhotoId" //autocomplete="off"
                                          /></div>   
                      {/* <div className="mb-1 register">             
                  <label htmlFor="CountryId" className="form-label">
                    Country</label>
                          <select id="country" style={{width:"50%",height:"50%"}}>
                          <option value="india">India</option>
                        <option value="us">Us</option>
                   
                 </select>
  </div>*/}
            
    
        <Select className='selecte-data'
              
       onChange={handleChange}
        options={countryOptions}
        isSearchable={true}
        placeholder="Select a country"
      />
         
            </div>        
            <div className='flex-container'>
            <div className="mb-1 register">
                <label htmlFor="CityId" className="form-label">
                    City</label>
                      <input type="text" name="city" className="form-control" id="CityId" //autocomplete="off"
              />
          </div>
                      <div className="mb-1 register">
                <label htmlFor="WalletAddressId" className="form-label">
                    Wallet Address </label>
                      <input type="text" name="walletAddress" className="form-control" id="WalletAddressId" //autocomplete="off"
              /></div>                                  
                    </div>
                    <NavLink to="/login" name="submit" className="btn btn-primary button "
                      style={{ width: "30%", textAlign: "center", marginLeft: "110px" }}>
                    Register
                   </NavLink>
                            
                            <div className="row p-4 text-center">
                              <div className='col-6' >
                                <p className="member text-medium ">Already a member ?</p>
                              </div>
                              <div  className="col-6 text-right">
                                <NavLink to="/login" component={NavLink}>
                                  <Button variant="outlined" className="p-1">
                                    LOGIN HERE
                                  </Button>
                                </NavLink>
                              </div>
                            </div>
                          </Form>     
                              </section>
                          </Card.Body>
                      </div>
                  </div>
              </Container>
          </div>
    </div>
  )
}

export default InvestorRegister

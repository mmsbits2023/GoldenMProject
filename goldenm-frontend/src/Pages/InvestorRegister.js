import React, { useState} from 'react'
import Card from 'react-bootstrap/Card'  
import { Container } from '@mui/material'
import Button from '@mui/material/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { green } from '@mui/material/colors'
import { Form } from 'react-bootstrap'
import Select from 'react-select';
import { countries } from 'countries-list';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const InvestorRegister = () => {
 /*Country list      
const countryOptions = Object.keys(countries).map((countryCode) => ({
  value: countryCode,
  label: countries[countryCode].name,
}));
     const [selectedCountry, setSelectedCountry] = useState(null);
        const handleChange = (selectedOption) => {
            setSelectedCountry(selectedOption);
        };
  /*country code 
   const [phoneNumber, setPhoneNumber] = useState('');

  const handleOnChange = (value, data) => {
    // `value` contains the selected phone number with country code
    setPhoneNumber(value);
  };*/
  const navigate =useNavigate();
  const [data, setData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
   phoneNumber: '',
    email: '',
    mpin:'',
  country:'',
   city:'',
   photoId:'',
   walletAddress:''
})
const handleInput = (event) => { 
  setData({ ...data, [event.target.name]: event.target.value })
}
const [errors, setErrors] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {}

    if (!data.firstName) { 
      validationErrors.firstName='FirstName is required'
    }
    if (!data.middleName) { 
      validationErrors.middleName='MiddleName is required'
    }
    
     if (!data.lastName) { 
      validationErrors.lastName='LastName is required'
    }

  /*  if (!data.phoneNumber) {
      validationErrors.phoneNumber = 'PhoneNumber is required'
    } else if (data.phoneNumber.length < 10) {
      validationErrors.phoneNumber = "PhoneNumber should be at least 10 digit"
    } else if (data.phoneNumber.length > 10) {
      validationErrors.phoneNumber = "PhoneNumber should be at least 10 digit "
    }*/
        
       if (!data.email) {
      validationErrors.email = "email is required"
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data.email)) {
      validationErrors.email = "email is not valid"
    }

    if (!data.mpin) {
      validationErrors.mpin = 'Password is required'
    } else if (data.mpin.length < 9) {
      validationErrors.mpin = "Password should be minimum 9 char or maximum 15 char"
    } else if (data.mpin.length > 15) {
      validationErrors.mpin = "Password should be minimum 9 char or maximum 15 char"
    }
               
   
    if (!data.photoId) { 
      validationErrors.photoId='PhotoId is required'
    }

     //if (!data.country) { 
      //validationErrors.country='Country is required'
    //}
     
     if (!data.city) { 
      validationErrors.city='City is required'
    }

    if (!data.walletAddress) {
      validationErrors.walletAddress = 'Wallet Address is required'
    } else if (data.walletAddress.length <16) {
      validationErrors.walletAddress= "Wallet Address should be at least 6 digit"
    } else if (data.walletAddress.length > 16) {
      validationErrors.pinCode = "Wallet Address should be at least 6 digit"
    }

    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0 ) {
      const { firstName, middleName, lastName,
        phoneNumber,email, mpin, country,city,photoId,walletAddress } = data;
        
      const response = await fetch("http://localhost:9006/investor/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          email: email,
          mpin: mpin,
         country:country,
         city:city,
         photoId:photoId,
         walletAddress:walletAddress

        })
        
      });
      
      const result = await response.json(data);

      if (result.status === 422 || !data) {
        window.alert("Inavalid Registeration");
        console.log("Inavalid Registration");
      }
      else {
        window.alert("Registeration Successfully");
        console.log("Successfully Registration");
        navigate('/login');
          
            
      }
    }
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
                             <Form onSubmit={handleSubmit} className="shadow pt-2" >
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
                      onChange={handleInput} />
                       {errors.firstName && <span className='errorData'>{ errors.firstName}</span> } 
                      </div>
                      <div className="mb-1 register ">
                <label htmlFor="MiddleNameId" className="form-label">
                    MiddleName</label>
                      <input type="text" name="middleName" className="form-control" id="MiddleNameId" //autocomplete="off"
                         onChange={handleInput}/>
                   {errors.middleName && <span className='errorData'>{ errors.middleName}</span> }       
          </div>
                    </div>
            <div className='flex-container'>    
            <div className="mb-1 register">
                <label htmlFor="LastNameId" className="form-label">
                    LastName </label>
                      <input type="text" name="lastName" className="form-control" id="LastNameId" //autocomplete="off"
                         onChange={handleInput} />
                         {errors.lastName && <span className='errorData'>{ errors.lastName}</span> }
                        </div>
                      <div className="mb-1 register">
                        <label htmlFor="PhoneNumberId" className="form-label">
                    PhoneNumbber </label>
                      <input type="text" name="phoneNumber" className="form-control" id="PhoneNumberId" //autocomplete="off"
  onChange={handleInput}/>
  {errors.phoneNumber && <span className='errorData'>{ errors.phoneNumber}</span> }
  </div>                                              
                      {/*<PhoneInput className='selecte-data'
                         placeholder='Enter phone number'
                        country={'in'} // Default country (you can set to any country code)
                        value={phoneNumber}
  onChange={handleChange}/>*/}
                         {/* {errors.phoneNumber && <span className='errorData'>{ errors.phoneNumber}</span> }*/}
                                   </div>
                <div className='flex-container'>
                                          <div className="mb-1 register">             
                  <label htmlFor="EmailId" className="form-label">
                    Email</label>
                      <input type="text" name="email" className="form-control" id="EmailId" //autocomplete="off"
                onChange={handleInput} />
                {errors.email && <span className='errorData'>{ errors.email}</span> }  
           </div>
            
            <div className="mb-1 register">
                <label htmlFor="PasswordId" className="form-label">
                    Password</label>
                      <input type="password" name="mpin" className="form-control" id="PasswordId" //autocomplete="off"
              onChange={handleInput} />
              {errors.mpin && <span className='errorData'>{ errors.mpin}</span> }
               </div></div>
          <div className='flex-container'>
            <div className="mb-1 register">
                <label htmlFor="PhotoId" className="form-label">
                    PhotoId </label>
                      <input type="text" name="photoId" className="form-control" id="PhotoId" //autocomplete="off"
                     onChange={handleInput} />
                        {errors.photoId&& <span className='errorData'>{ errors.photoId}</span> }                 
                                         </div>   
                       <div className="mb-1 register">             
                  <label htmlFor="CountryId" className="form-label">
                    Country</label>
                    <input type="text" name="country" className="form-control" id="CountryId" //autocomplete="off"
                     onChange={handleInput} />   
                 {errors.country&& <span className='errorData'>{ errors.country}</span> }
  </div>
            
    
       {/* <Select className='selecte-data'
              
        onChange={handleChange}
        options={countryOptions}
        isSearchable={true}
        placeholder="Select a country"
        
/>*/}
        {/* {errors.country&& <span className='errorData'>{ errors.country}</span> }*/}
            </div>        
            <div className='flex-container'>
            <div className="mb-1 register">
                <label htmlFor="CityId" className="form-label">
                    City</label>
                      <input type="text" name="city" className="form-control" id="CityId" //autocomplete="off"
                onChange={handleInput}/>
                {errors.city && <span className='errorData'>{ errors.city}</span> }
          </div>
                      <div className="mb-1 register">
                <label htmlFor="WalletAddressId" className="form-label">
                    Wallet Address </label>
                      <input type="text" name="walletAddress" className="form-control" id="WalletAddressId" //autocomplete="off"
              onChange={handleInput} />
              {errors.walletAddress&& <span className='errorData'>{ errors.walletAddress}</span> }
              </div>                                  
                    </div>
                    <button type="submit" className="btn btn-primary button "
                      style={{ width: "30%", textAlign: "center", marginLeft: "200px" }}>
                    Register
                   </button>  
                     
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

export default InvestorRegister;

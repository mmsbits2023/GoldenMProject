import React, { useState} from 'react'
import Card from 'react-bootstrap/Card'  
import { Container } from '@mui/material'
//import Button from '@mui/material/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { green } from '@mui/material/colors'
import { Form } from 'react-bootstrap'
//import PhoneInput from 'react-phone-input-2'
//import { AiFillInfoCircle } from 'react-icons/ai'



const InvestorLogout= () => {
  const navigate = useNavigate();
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
          validationErrors.email = "email is not valid"
      }

      if (!data.phoneNumber) {
          validationErrors.phoneNumber = 'PhoneNumber is required'
      } else if (data.phoneNumber.length < 10) {
          validationErrors.phoneNumber = "PhoneNumber should be at least 10 digit "
      } else if (data.phoneNumber.length > 10) {
          validationErrors.phoneNumber = "PhoneNumber should be at least 10 digit "
      }
      
      if (!data.mpin) {
          validationErrors.mpin = 'Password is required'
      } else if (data.mpin.length < 8) {
          validationErrors.mpin = "Password should be at least 9 char"
      } else if (data.mpin.length > 16) {
          validationErrors.mpin = "Password should be at least 9 char"
      }
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
          const { email, phoneNumber, mpin } = data;
          const response = await fetch("http://localhost:9006/investor/logout", {
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
              window.alert("Logout Successfully");
              console.log("Successfully Logout");
              navigate('/');
        
          
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
                             <Form onSubmit={handleSubmit} className="shadow pt-2">
                            <div className="text-center d-flex justify-content-center p-1">
                              {/* <Avatar className="items-center text-center" src="1.jpg" /> */}
                              <Avatar sx={{ bgcolor: green[500] }}></Avatar>
                            </div>
                            <h2 className="text-center p-3 fw-bold">Logout Form</h2>
                            
                         <div className="mb-1 register "style={{width:"70%",textAlign:"center",marginLeft:"100px"}}>             
                    <label htmlFor="EmailId" className="form-label">
                    Email</label>
                      <input type="text" name="email" className="form-control" id="EmailId" //autocomplete="off"
              onChange={handleInput} />
              {errors.email && <span className='errorData'>{ errors.email}</span> }
                      </div>
                      <div className="mb-1 register"style={{width:"70%",textAlign:"center",marginLeft:"100px"}}>
                <label htmlFor="PhoneNumberId" className="form-label">
                    PhoneNumber</label>
                      <input type="text" name="phoneNumber" className="form-control" id="PhoneNumberId" //autocomplete="off"
             onChange={handleInput} />
             {errors.phoneNumber && <span className='errorData'>{ errors.phoneNumber}</span> }
          </div> 
              
            <div className="mb-1 register"style={{width:"70%",textAlign:"center",marginLeft:"100px"}}>
                <label htmlFor="PasswordId" className="form-label">
                    Password </label>
                      <input type="password" name="mpin" className="form-control" id="PasswordId" //autocomplete="off"
                       onChange={handleInput} />
                       {errors.mpin && <span className='errorData'>{ errors.mpin}</span> }
                       </div>
                                      
                       <button type="submit" className="btn btn-primary button "
                      style={{ width: "30%", textAlign: "center", marginLeft: "200px" }}>
                    Logout
                   </button>                        
                                      {/* <div className="row p-4 "style={{width:"70%",textAlign:"center",marginLeft:"200px"}}>
                                           <div  className="col-6 text-right">
                                <NavLink to="/" component={NavLink}>
                                  <Button variant="outlined" className="p-1">
                                    Logout
                                  </Button>
                                </NavLink>
                              </div>                                                                    
                                      </div>
  */}
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

export default InvestorLogout

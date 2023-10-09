//import React, { useState} from 'react'
import Card from 'react-bootstrap/Card'  
import { Container } from '@mui/material'
//import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { green } from '@mui/material/colors'
import { Form } from 'react-bootstrap'
//import PhoneInput from 'react-phone-input-2'
//import { AiFillInfoCircle } from 'react-icons/ai'



const InvestorLogout= () => {
    
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
                            <h2 className="text-center p-3 fw-bold">Logout Form</h2>
                            
                         <div className="mb-1 register "style={{width:"70%",textAlign:"center",marginLeft:"100px"}}>             
                    <label htmlFor="FirstNameNameId" className="form-label">
                    FirstName</label>
                      <input type="text" name="firstName" className="form-control" id="FirstNameId" //autocomplete="off"
               />
                      </div>
                      <div className="mb-1 register"style={{width:"70%",textAlign:"center",marginLeft:"100px"}}>
                <label htmlFor="MiddleNameId" className="form-label">
                    MiddleName</label>
                      <input type="text" name="middleName" className="form-control" id="MiddleNameId" //autocomplete="off"
              />
          </div> 
              
            <div className="mb-1 register"style={{width:"70%",textAlign:"center",marginLeft:"100px"}}>
                <label htmlFor="PasswordId" className="form-label">
                    Password </label>
                      <input type="password" name="password" className="form-control" id="PasswordId" //autocomplete="off"
                        /></div>
                                      
                                    <NavLink to="/" name="submit" className="btn btn-primary button "
                      style={{ width: "30%", textAlign: "center", marginLeft: "200px" }}>
                    Logout
                   </NavLink>                        
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

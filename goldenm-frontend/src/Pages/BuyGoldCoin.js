import React from 'react'
import Card from 'react-bootstrap/Card'  
import { Container } from '@mui/material'
//import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import { Form } from 'react-bootstrap'




const BuyGoldCoin= () => {
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

                            <h2 className="text-center p-3 fw-bold">Buy/Purchase Gold Coin</h2>
                         
                                                 
                                      <div className="row p-4 "style={{width:"100%",textAlign:"center",marginLeft:"80px"}}>
                                    <div  className="col-6 text-right">
                                <NavLink to="/" component={NavLink}>
                                  <div variant="outlined" className="p-1">
                                                      Gold Coin
                            <select id="country">
                          <option value="india">India</option>
                            <option value="us">Us</option>
                          </select>
                                  </div>
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

export default BuyGoldCoin

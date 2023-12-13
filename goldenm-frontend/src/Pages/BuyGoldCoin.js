import React from 'react'
import Card from 'react-bootstrap/Card'  
import { Container } from '@mui/material'
//import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'




const BuyGoldCoin= () => {
    return (
    <div>
      <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
      <Container>
        <div className=" row justify-content-center">
          <div className="col-md-6 col-lg-2 col-xl-6 col-sm-12">
           
            <section className="w-full mx-auto items-center justify-center ">
                           

                            <h2 className="text-center p-3 fw-bold">Buy/Purchase Gold Coin</h2>
                         
                                                 
                                      <div className="row p-4 "style={{width:"100%",textAlign:"center",marginLeft:"80px"}}>
                                    <div  className="col-6 text-right">
                                
                                          
                               <div className="inline-flex " style={{ width: "30%", textAlign: "center", marginLeft: "200px" }}>
                                <NavLink to="/addCoinDetails" component={NavLink}>
                                  <Button  variant="outlined" className="p-1  bg-primary ">1</Button>
                                  </NavLink><br/><br/>
                                  <NavLink to="/addCoinDetails" component={NavLink}>
                                  <Button  variant="outlined" className="p-1  bg-primary ">2</Button>
                                  </NavLink><br/><br/>
                                  <NavLink to="/addCoinDetails" component={NavLink}>
                                  <Button  variant="outlined" className="p-1  bg-primary">3</Button>
                                  </NavLink><br/><br/>
                                  <NavLink to="/addCoinDetails" component={NavLink}>
                                  <Button  variant="outlined" className="p-1  bg-primary">4</Button>
                                  </NavLink><br/><br/>
                                  <NavLink to="/addCoinDetails" component={NavLink}>
                                  <Button  variant="outlined" className="p-1  bg-primary">5</Button>
                                  </NavLink><br/><br/>
                                  <NavLink to="/addCoinDetails" component={NavLink}>
                                  <Button  variant="outlined" className="p-1  bg-primary">5</Button>
                                  </NavLink><br/><br/>
                                  <NavLink to="/addCoinDetails" component={NavLink}>
                                  <Button  variant="outlined" className="p-1  bg-primary">6</Button>
                                  </NavLink><br/><br/>
                                  <NavLink to="/addCoinDetails" component={NavLink}>
                                  <Button  variant="outlined" className="p-1  bg-primary">7</Button>
                                  </NavLink><br/><br/>
                                  <NavLink to="/addCoinDetails" component={NavLink}>
                                  <Button  variant="outlined" className="p-1  bg-primary">8</Button>
                                  </NavLink><br/><br/>
                                  <NavLink to="/addCoinDetails" component={NavLink}>
                                  <Button  variant="outlined" className="p-1  bg-primary">9</Button>
                                  </NavLink><br/><br/>
                                  <NavLink to="/addCoinDetails" component={NavLink}>
                                  <Button  variant="outlined" className="p-1  bg-primary">10</Button>
                                  </NavLink>
                              </div>
                                
                              </div>
                              
                                  </div>                                    
                            
                             
                              </section>
                          
                      </div>
                  </div>
              </Container>
          </div>
    </div>
  )
}

export default BuyGoldCoin

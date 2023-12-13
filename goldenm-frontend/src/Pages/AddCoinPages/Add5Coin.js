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



const Add5Coin= () => {
  
  const navigate = useNavigate();
  const [data, setData] = useState({
      coinNumber:'',
      coinValue: '',
      coinWeight:'',
      coinToken:'',
  });
  const handleInput = (event) => { 
      setData({...data,[event.target.name]:event.target.value})
  }
  const [errors, setErrors] = useState('');
  const handleSubmit = async (e) => { 
      e.preventDefault();
      const validationErrors = {}
      if (!data.coinNumber) {
          validationErrors.coinNumber = "Coin Number is required"
      }

      if (!data.coinValue) {
          validationErrors.coinValue = 'CoinValue is required'
      }
      if (!data.coinWeight) {
        validationErrors.coinWeight= "Coin Weight is required"
    }

    if (!data.coinToken) {
        validationErrors.coinToken= 'CoinToken is required'
    }
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
          const { coinNumber, coinValue,coinWeight,coinToken } = data;
          const response = await fetch("http://localhost:9006/investor/addCoinDetails", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  coinNumber:coinNumber,
                  coinValue: coinValue,
                  coinWeight:coinWeight,
                  coinToken:coinToken,
              })
          });
          const result = await response.json();
          if (result.status === 422 || !data) {
              window.alert("Inavalid data");
              console.log("Inavalid data");
          }
          else {
              window.alert("Add Successfully");
              console.log(" Add Successfully ");
              navigate('/paymentDetails');
        
          
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
                          
                           <h2 className="text-center p-3 fw-bold">Coin Details</h2>  
                       <div className="mb-1 register " style={{width:"70%",textAlign:"center",marginLeft:"100px"}}>             
                    <label htmlFor="coinNumberId" className="form-label">
                    CoinNumber</label>
                      <input type="text" name="coinNumber" className="form-control" id="coinNumberId" //autocomplete="off"
                 onChange={handleInput} value={5}/>
                  {errors.coinNumber && <span className='errorData'>{ errors.coinNumber}</span> }
                      </div>
                      <div className="mb-1 register  "style={{width:"70%",textAlign:"center",marginLeft:"100px"}}>
                <label htmlFor="coinValueId" className="form-label">
                    CoinValue</label>
                      <input type="text" name="coinValue" className="form-control" id="coinValueId" //autocomplete="off"
                onChange={handleInput} value={5000}/>
                 {errors.coinValue && <span className='errorData'>{ errors.coinValue}</span> }
          </div> 
              
            <div className="mb-1 register "style={{width:"70%",textAlign:"center",marginLeft:"100px"}}>
                <label htmlFor="coinWeightId" className="form-label">
                    CoinWeight</label>
                      <input type="text" name="coinWeight" className="form-control " id="coinWeightId" //autocomplete="off"
                         onChange={handleInput} value={7.25} />
                          {errors.coinWeight&& <span className='errorData'>{ errors.coinWeight}</span> }
                         </div>
                         <div className="mb-1 register "style={{width:"70%",textAlign:"center",marginLeft:"100px"}}>
                <label htmlFor="coinTokenId" className="form-label">
                    CoinToken</label>
                      <input type="text" name="coinToken" className="form-control " id="coinTokenId" //autocomplete="off"
                         onChange={handleInput} value={50000}/>
                          {errors.coinToken&& <span className='errorData'>{ errors.coinToken}</span> }
                         </div>
                     

                             <div className="row-2 " style={{ width: "30%", textAlign: "center", marginLeft: "200px" }}>
                                <NavLink to="/paymentDetails" component={NavLink}>
                                  <Button variant="outlined" className="p-1 bg-primary text-white">
                                    Payment
                                  </Button>
                                </NavLink>
                              </div><br/>                              <div className="row-2" style={{ width: "30%", textAlign: "center", marginLeft: "200px" }}>
                                <NavLink to="/buyGoldCoin" component={NavLink}>
                                  <Button variant="outlined" className="p-1 bg-primary text-white">
                                    Back
                                  </Button>
                                </NavLink>
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

export default Add5Coin

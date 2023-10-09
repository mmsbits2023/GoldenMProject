import React, {useState} from 'react'
import { PhoneInput } from 'react-phone-input-2';



const Ph = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div>
         <div className="phone-input d-flex justify-content-center">
                              <div className="row ">
                                <div className="col-8">
                                  <PhoneInput
                                    classname=" pb-2  "
                                    country={'in'}
                                    value={phoneNumber}
                                    onChange={setPhoneNumber}
                                    disabled=""
                                  />
                                </div>
                              </div>
                                </div>
    </div>
  )
}

export default Ph

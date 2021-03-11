import React, { useState, useRef, useCallback } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import OtpInput from "react-otp-input";
import './style.css'
function OTPverify() {
    const inpcount = ['ref1','ref2','ref3','ref4','ref5','ref6'];
    const [activeIndex, setactiveIndex] = useState('')
    const refs = {
         ref1 : useRef(),
        ref2 : useRef(),
         ref3  :useRef(),
         ref4 : useRef(),
         ref5 : useRef(),
         ref6 : useRef()
    }
const [Otp, setOtp] = useState('')
   const validateOtp = async() =>{
       try {
        
       } catch (e) {
           
       }
   }
    return (
        <>
          <Col lg="6" md="8">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-3">
                <div className="text-muted text-center mt-2 mb-4">
                  <small>Verify your OTP</small>
                </div>
               
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Enter your OTP here</small>
                </div>
              <div
                className={'justifyContent'}
              > 
                <OtpInput
                inputStyle={
                    {
                        width:'3em',
                        height:'3em',
                        color:'black',
                        padding: 0,
                        textAlign:'center'
                    }
                }
                value={Otp}
          onChange={otp => setOtp(otp)}
          numInputs={6}
          separator={<Col>{"       "}</Col>}
        />
               </div>
                  
                  
                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="button">
                      Verify OTP
                    </Button>
                  </div>
    
              </CardBody>
            </Card>
          </Col>
        </>
      );
}

export default OTPverify

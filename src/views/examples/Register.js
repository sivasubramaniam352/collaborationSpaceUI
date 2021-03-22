/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { Toast } from "bootstrap";
import { CONFIG } from "Global/GlobalCreds";
import React, { useState } from "react";
import { withRouter } from "react-router";

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
import { signUp } from "services/ApiServices";

const Register = (props) => {
  const [Creds, setCreds] = useState({ username: "", email: "", password: "" });
  const [Err, setErr] = useState({ userName: "", email: "", password: "" });
  const [pswdStrength, setpswdStrength] = useState('')
  const signUpUser = async (e) => {
    e.preventDefault();
if (Err.email || Err.password || Err.userName) {
  return ;
}

    try {
      let res = await signUp(Creds);
      if (res.success) {
        localStorage.setItem("pretoken", res.token);
        props.history.push("/auth/otp/verify");
      } else {
        alert(res.error);
      }
    } catch (e) {
      alert(e.message);
    }
  };

  const changeHandler = (e, name) => {
    if (name === "email" && Creds.email) {
      const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      let match = emailPattern.test(String(e).toLowerCase());
      if (!match) {
        setErr({ ...Err, email: "please enter valid email" });
      } else {
        setErr({ ...Err, email: "" });
      }
    }

    if (name === "password" && Creds.password) {
      var strongRegex = new RegExp(
        "^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
        "g"
      );
      var mediumRegex = new RegExp(
        "^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
        "g"
      );
      var enoughRegex = new RegExp("(?=.{8,}).*", "g");
      let matchStr = strongRegex.test(String(e));
      let matchMed = mediumRegex.test(String(e));
      let matchen = enoughRegex.test(String(e));
      if (!matchMed && !matchStr && !matchen) {
        setErr({ ...Err, password: "waek" });
      }
if(!matchMed && !matchStr && matchen){
  setErr({...Err,password:''})
  setpswdStrength('enough')
}
if(matchMed){
  setErr({...Err,password:''})

  setpswdStrength('medium')
}
   
if(matchStr){
  setErr({...Err,password:''})

  setpswdStrength('strong')
}

}

if (name === 'username' && Creds.username) {
   if (Creds.username.length <= 2) {
     setErr({userName:'minimum of four characters required'});
   }
   else{
    setErr({...Err,userName:''})
   }
}


    return setCreds({ ...Creds, [name]: e });
  };
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-4">
              <small>Sign up with</small>
            </div>
            <div className="text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  {
                    /*redirect to google Auth*/
                  }
                  window.location = `${CONFIG.serverUrl}/google`;
                }}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign up with credentials</small>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Name"
                    type="text"
                    onChange={(e) => changeHandler(e.target.value, "username")}
                  />
                  {Err.userName && 
                   <InputGroupAddon addonType="prepend">
                   <InputGroupText>
                   <i class="fas fa-exclamation-circle" />
                   </InputGroupText>
                 </InputGroupAddon>
                  
                  }
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    onChange={(e) => changeHandler(e.target.value, "email")}
                  />
                  {Err.email && 
                   <InputGroupAddon addonType="prepend">
                   <InputGroupText>
                   <i class="fas fa-exclamation-circle" />
                   </InputGroupText>
                 </InputGroupAddon>
                  
                  }
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={(e) => changeHandler(e.target.value, "password")}
                  />
                  {Err.password && 
                   <InputGroupAddon addonType="prepend">
                   <InputGroupText>
                   <i class="fas fa-exclamation-circle" />
                   </InputGroupText>
                 </InputGroupAddon>
                  
                  }
                </InputGroup>
              </FormGroup>
              <div className="text-muted font-italic">
                <small>
                  password strength:{" "}
                  {Err.password ?
                  <span className={"text-danger font-weight-700"}>{Err.password}</span>
                  :
                  <span className={`${pswdStrength==='enough'?'text-warning':pswdStrength==='medium'?'text-success':'text-info'} font-weight-700`}>{pswdStrength}</span>
                  }
                  
                </small>
              </div>
              <Row className="my-4">
                <Col xs="12"></Col>
              </Row>
              <div className="text-center">
                <Button
                  className="mt-4"
                  onClick={(e) => signUpUser(e)}
                  color="primary"
                  type="button"
                >
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
    
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) =>{ e.preventDefault()
             props.history.push('/auth/login');
              }}
            >
              <small>Sign In</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default withRouter(Register);

import React, { useState } from 'react';

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
import { useDispatch, useSelector } from "react-redux";
import { createWs } from "services/ApiServices";
import { getUser } from 'services/ApiServices';
import { withRouter } from 'react-router';
import { addtoWs } from 'services/ApiServices';

const AddtoWs = (props) =>{
const [workspaceName, setworkspaceName] = useState('');
const user = useSelector(state => state.user);
const dispatch = useDispatch();
const createWorkSpace = async(e) => {
  try {
    let bod = {
      admin : user._id,
      name : workspaceName,
    }

    let res = await createWs(bod);
    if (res.success) {
     
    
        let token = localStorage.getItem('token');
        try {
          let res = await getUser(token);
          if (res.success) {
            console.log(res.user);
            dispatch({type:'user', user:res.user})
            if(res.user.created_workspaces.length > 0){
              dispatch({type:'currentWs', currentCh:res.user.created_workspaces[0].workSpace});
              dispatch({type:'currentCh', currentCh:res.user.created_workspaces[0].workSpace.channels[0].channelId});
            }
            if (res.user.admitted_workspaces.length > 0) {
              dispatch({type:'currentWs', currentCh:res.user.admitted_workspaces[0].workSpace});
              dispatch({type:'currentCh', currentCh:res.user.admitted_workspaces[0].workSpace.channels[0].channelId});
            }
          } else {
            alert(res.error);
          }
        } catch (e) {
          alert(e.message);
        }
      
      return props.history.push('/ws/index');
    }
    else{
      console.log(res);
      return alert(res.error+'1') 
    }
  } catch (e) {
    console.log(e.message);
    alert(e.message+'2')
  }
}

const ATW = async() =>{
  try {
    let res = await addtoWs({
      userEmail:user.email,

    })
  } catch (e) {
    
  }
}

    return (
        <>
          <Col lg="6" md="8">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-5">
                <p className={""}>Create Work Space</p>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
              <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Work-space Name" 
                      onChange={(e)=> setworkspaceName(e.target.value)}
                      type="text" />
                    </InputGroup>
                  </FormGroup>

                  <div className="text-center">
                    <Button className="mt-4" color="info" type="button"
                    onClick={(e)=>createWorkSpace(e)}
                    >
                      Create Work-space
                    </Button>
                  </div>
                <div className="text-center text-muted mb-4">
                  <small>Or add to Work-space</small>
                </div>
                <Form role="form">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Work-space Name" type="text" />

                    </InputGroup>
                  </FormGroup>
                  
                
                  <Row className="my-4">
                    <Col xs="12">
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="customCheckRegister"
                          type="checkbox"
                        />
                        
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button className="mt-4" 
                    onClick={() => ATW()}
                    color="primary" type="button">
                      Add to workspace
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </>
      );
}

export default withRouter(AddtoWs)

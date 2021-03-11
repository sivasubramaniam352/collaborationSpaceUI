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

const AddtoWs = () =>{
const [workspaceName, setworkspaceName] = useState('');
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
                      <Input placeholder="Work-space Name" type="text" />
                    </InputGroup>
                  </FormGroup>

                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="button">
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
                    <Button className="mt-4" color="primary" type="button">
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

export default AddtoWs

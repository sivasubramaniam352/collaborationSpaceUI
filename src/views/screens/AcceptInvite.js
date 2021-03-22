import React from 'react'
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
  
function AcceptInvite() {
    return (
        <div>
            
        </div>
    )
}

export default AcceptInvite

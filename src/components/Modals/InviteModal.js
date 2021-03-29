import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroupAddon, InputGroupText, InputGroup } from 'reactstrap';
import {inviteUser} from '../../services/ApiServices'
import './ModalStyle.css'
import { useDispatch, useSelector } from "react-redux";

const InviteModal = ({visibility, exitFun})  => {
    console.log(visibility);
  const dispatch = useDispatch();
  const currentWs = useSelector(state => state.currentWs);
    const [email, setEmail] = useState('')
    const [Err, setErr] = useState({email:''})
    const changeHandler = (e) =>{
      const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      let match = emailPattern.test(String(e).toLowerCase());
      if (!match) {
        setErr({ ...Err, email: "please enter valid email" });
      } else {
        setErr({ ...Err, email: "" });
      }
      setEmail(e)
    }

    const inviteHandler = async() =>{
      try {
        let token = localStorage.getItem('token')
        let res = inviteUser({
          workSpaceId:currentWs._id,
          userEmail:email,

        }, token);

        if (res.workSpace) {
        
          exitFun()
          console.log(res.workSpace);

        }
        else{
          alert(res.error)
        }
      } catch (e) {
        alert(e.message)
      }
    }
    return (
        <div
         >
              <Modal isOpen={visibility} toggle={exitFun} 
              style={{
                  width:'50vw'
              }}
              className={'modalForCreateChannel'}>
        <ModalHeader toggle={exitFun}>Create a channel</ModalHeader>
        <ModalBody>
          <p>
          Invite your team-mates with email Id 

          </p>

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
        </ModalBody>
        <ModalFooter>
          
          <Button color="secondary"
          
          onClick={() => inviteHandler()}>Send</Button>
        </ModalFooter>
      </Modal>
        </div>
    )
}

export default InviteModal

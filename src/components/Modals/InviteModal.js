import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

import './ModalStyle.css'
const InviteModal = ({visibility, exitFun})  => {
    console.log(visibility);
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

          <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
        </ModalBody>
        <ModalFooter>
          
          <Button color="secondary"
          
          onClick={exitFun}>Send</Button>
        </ModalFooter>
      </Modal>
        </div>
    )
}

export default InviteModal

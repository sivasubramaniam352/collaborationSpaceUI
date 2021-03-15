import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

import './ModalStyle.css'
const CCModal = ({visibility, exitFun})  => {
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
          Channels are where your team communicates. They’re best when organized around a topic — #marketing, for example.
          </p>

            <Input
                    placeholder="Channel name"
                    type="text"
                
                  />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={exitFun}>create</Button>{' '}
         
        </ModalFooter>
      </Modal>
        </div>
    )
}

export default CCModal

'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PriceModal({show, handleClose, handleShow, data}) {
  

  return (
    <>
      
      <Modal show={show} onHide={handleClose} className='cc-modal' centered>
        <Modal.Header closeButton>
          <Modal.Title>Evolving Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                data &&
                <div className='points'>
                    <ul>
                        {
                            data.map((item, index)=>{
                                return(
                                    <li key={index}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default PriceModal;
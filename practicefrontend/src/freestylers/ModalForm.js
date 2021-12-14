import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FreeStylersForm } from './FreeStylersForm'

export const ModalForm = ({showModal=false, onHide= ()=> {}, isEdit=false}) => {
    return (
        <Modal
            show={showModal}
            onHide={onHide}
            backdrop="static"
            keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title> 
              {
                isEdit ? ("Agregar entidad ") : ("Editar entidad")
              }
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FreeStylersForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cerrar
          </Button>
          <Button variant="primary">Guardar</Button>
        </Modal.Footer>
      </Modal>
    )
}

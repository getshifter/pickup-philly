import React, { useState } from "react"
import { NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import logo from "../../images/pickpuphilly-logo.png"

const InfoModal = props => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <NavLink color="primary" onClick={toggle}>
        {buttonLabel}
      </NavLink>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}><img src={logo} alt="logo" /></ModalHeader>
        <ModalBody>
        Using the power of open source, let’s create a business directory tool for the Philadelphia community listing all businesses affected by the coronavirus outbreak reaching their customers with how to shop, modified hours of operation, and more.

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default InfoModal

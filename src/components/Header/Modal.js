import React, { useState } from "react"
import { NavLink, Modal, ModalHeader, ModalBody, ModalFooter, Row } from "reactstrap"
import { Twitter } from "@styled-icons/feather/"
import logo from "../../images/pickpuphilly-logo-light.png"


const InfoModal = props => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <NavLink color="primary" onClick={toggle} className="display-3">
       {buttonLabel}
      </NavLink>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}><img src={logo} alt="logo" /></ModalHeader>
        <ModalBody className="display-2 px-5 text-light">
        Using the power of open source, let’s create a business directory tool for the Philadelphia community listing all businesses affected by the coronavirus outbreak reaching their customers with how to shop, modified hours of operation, and more.

        </ModalBody>
        <ModalFooter className="mb-4">
          <Row className= "d-inline justify-content-between display-2 text-white">
          Contact Us
         <Twitter size="2rem"/>
          </Row>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default InfoModal

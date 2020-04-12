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
        <ModalHeader toggle={toggle}><img src={logo} alt="logo" className="mt-4 ml-4"/></ModalHeader>
        <ModalBody className="display-2 px-5 text-light">
        Using the power of open source, let’s create a business directory tool for the Philadelphia community listing all businesses affected by the coronavirus outbreak reaching their customers with how to shop, modified hours of operation, and more.

        </ModalBody>
        <ModalFooter className="mb-4 d-inline justify-content-between display-2">
          <a className="text-white" href="/">Contact Us</a>
          <a className="text-white" href="twitter.com"><Twitter size="2rem"/></a>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default InfoModal

import React, { useState } from "react"
import {
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
} from "reactstrap"
import { Twitter, ArrowRight } from "@styled-icons/feather/"
import logo from "../../images/pickpuphilly-logo-light.png"

const InfoModal = props => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <NavLink
        color="primary"
        onClick={toggle}
        className="display-3 modal__header-aboutlink"
      >
        {buttonLabel}
      </NavLink>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <img src={logo} alt="logo" className="mt-4 ml-4" />
        </ModalHeader>
        <ModalBody className="display-2 px-sm-5 px-xs-0 pb-5 text-light">
          Using the power of open source, let’s create a business directory tool
          for the Philadelphia community listing all businesses affected by the
          coronavirus outbreak reaching their customers with how to shop,
          modified hours of operation, and more.
        </ModalBody>
        <ModalFooter className="pt-5 mb-4 justify-content-between display-3">
          <Col>
            <a className="text-white" href="/">
              Contact Us <ArrowRight size="2rem" />
            </a>
          </Col>
          <Col className="text-right">
            <a className="text-white" href="https://twitter.com/pickupphilly">
              <Twitter size="2rem" />
            </a>
          </Col>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default InfoModal

import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { NavLink, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import Img from "gatsby-image"
import { Twitter, ArrowRight } from "@styled-icons/feather/"

const InfoModal = props => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "pickpuphilly-logo-light.png" }) {
        childImageSharp {
          fixed(width: 175) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div>
      <NavLink
        color="primary"
        onClick={toggle}
        className="display-4 modal__header-aboutlink"
      >
        {buttonLabel}
      </NavLink>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <Img
            fixed={data.logo.childImageSharp.fixed}
            className="mt-4 ml-4"
            alt=""
          />
        </ModalHeader>
        <ModalBody className="display-2 px-sm-5 px-xs-0 pb-5 text-light">
          Using the power of open source, let’s create a business directory tool
          for the Philadelphia community listing all businesses affected by the
          coronavirus outbreak reaching their customers with how to shop,
          modified hours of operation, and more.
        </ModalBody>
        <ModalFooter className="pt-5 mb-4 justify-content-between display-3 align-items-start">
          <div>
            <div>
              <a
                className="text-white"
                href="https://docs.google.com/forms/d/e/1FAIpQLSceYKnS5BTSzN0Ym-omW-A8kUjp-9Sb0AZQ1csfXZ7_yLXAFA/viewform"
              >
                <ArrowRight size="2rem" /> Submit your Business
              </a>
            </div>
            <div>
              <a
                className="text-white"
                href="https://docs.google.com/forms/d/e/1FAIpQLSceYKnS5BTSzN0Ym-omW-A8kUjp-9Sb0AZQ1csfXZ7_yLXAFA/viewform"
              >
                <ArrowRight size="2rem" /> Contact Us
              </a>
            </div>
          </div>
          <div className="text-right">
            <a className="text-white" href="https://twitter.com/pickupphilly">
              <Twitter size="2rem" />
            </a>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default InfoModal

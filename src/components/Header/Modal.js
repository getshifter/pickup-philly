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
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ptf: file(relativePath: { eq: "PTF_logo.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      plb: file(relativePath: { eq: "PLB_logo.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      shifter: file(relativePath: { eq: "shifter_logo.png" }) {
         childImageSharp {
           fixed(width: 100) {
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
        <ModalBody className="modal__body display-2 px-sm-5 px-xs-0 pb-5 text-light">
          Pickup Philly is an open source business directory to help connect
          essential services with their customers during the coronavirus
          outbreak, including information on how to shop, modified hours of
          operation, and more.
        </ModalBody>
        <ModalFooter className="modal__footer display-3 pt-5 d-block d-sm-flex justify-content-between align-items-start text-sm-left">
          <div>
            <div>
              <a
                className="text-white"
                href="https://docs.google.com/forms/d/e/1FAIpQLSceYKnS5BTSzN0Ym-omW-A8kUjp-9Sb0AZQ1csfXZ7_yLXAFA/viewform"
              >
                <ArrowRight size="2rem" /> Submit your Business
              </a>
            </div>
            <div className="mt-3 mt-sm-0">
              <a
                className="text-white"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdAMspEfX9xsS_ZVf-Y2TwgQMP6FuiK4u2CpksJjzyVf2U39w/viewform"
              >
                <ArrowRight size="2rem" /> Contact Us
              </a>
            </div>
          </div>
          <div className="text-left text-sm-right mt-3 mt-sm-0">
            <a className="text-white mt-sm-0" href="https://twitter.com/pickupphilly">
              <Twitter size="2rem" />
            </a>
          </div>
  
        </ModalFooter>
        <div className="modal__sponsorlogos display-4 border-top border-light w-100 d-block d-sm-flex justify-content-between align-items-start ">
          <div className="small text-light mt-2">Proudly Sponsored by:</div>
          <div>
          <a href="https://phillylovesbeer.org/">
           <Img
            fixed={data.plb.childImageSharp.fixed}
            alt=""
            className="opacity-70 mt-sm-0 mt-4"
          />
          </a>
          <a href="https://www.getshifter.io/">
           <Img
            fixed={data.shifter.childImageSharp.fixed}
            className="ml-sm-5 opacity-70 mt-sm-0 mt-4"
            alt=""
          />
          </a>
          <a href="https://www.phillytapfinder.com/">
          <Img
            fixed={data.ptf.childImageSharp.fixed}
            className="ml-5 mt-sm-0 mr-0 opacity-70 mt-sm-0 mt-4 "
            alt=""
          />
          </a>
          </div>
          </div>
      </Modal>
    </div>
  )
}

export default InfoModal

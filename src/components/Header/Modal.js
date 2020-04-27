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
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ptf: file(relativePath: { eq: "PTF_logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
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
        <ModalBody className="px-sm-5 px-xs-0 pb-5 text-light display-2">
          Pickup Philly is an open source business directory to help connect
          essential services with their customers during the coronavirus
          outbreak, including information on how to shop, modified hours of
          operation, and more.
        </ModalBody>
        <ModalFooter className="pt-5 justify-content-between display-3 align-items-start">
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
                href="https://docs.google.com/forms/d/e/1FAIpQLSdAMspEfX9xsS_ZVf-Y2TwgQMP6FuiK4u2CpksJjzyVf2U39w/viewform"
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
        <div className="display-4 border-top border-light w-100 p-5 d-flex justify-content-between align-items-start">
          <div className="small text-light align-text-bottom">Proudly Sponsored by</div>
          <div>
          <a href="https://phillylovesbeer.org/">
           <Img
            fixed={data.plb.childImageSharp.fixed}
            alt=""
            className="my-auto"
          />
          </a>
          <a href="https://www.getshifter.io/">
           <Img
            fixed={data.shifter.childImageSharp.fixed}
            className="ml-5"
            alt=""
          />
          </a>
                    <a href="https://www.phillytapfinder.com/">
          <Img
            fixed={data.ptf.childImageSharp.fixed}
            className="ml-5"
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

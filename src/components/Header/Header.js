import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Col,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap"
// import SiteMenu from "../SiteMenu"
const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

const Index = ({ location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className="bg-light">
        <Container fluid>
          <Row>
            <Col>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Pickup Philly</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Button outline color="primary" onClick={toggle}>
                      About
                      </Button>
                    <Modal isOpen={modal} toggle={toggle}>
                      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                      <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </ModalBody>
                      <ModalFooter>
                        Twitter
                      </ModalFooter>
                    </Modal>
                  </NavItem>
                </Nav>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </header>
    )}
  />
)

Index.propTypes = {
  siteTitle: PropTypes.string,
}

Index.defaultProps = {
  siteTitle: ``,
}

export default Index

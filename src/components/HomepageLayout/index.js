import React from "react"
import SiteHeader from "../../components/SiteHeader"
import { Layout, Row, Col, Button, Table } from "antd"
import wpgraphqlLogo from "../../images/wpgraphql-logo.png"
import shifterLogo from "../../images/shifter-logo.png"
import gatsbyLogo from "../../images/gatsby-logo.png"
import netlifyLogo from "../../images/netlify-logo.png"
import githubLogo from "../../images/github-logo.png"
import wordpressLogo from "../../images/wordpress-logo.png"

const { Content } = Layout

const dataSource = [
  {
    key: "1",
    name: "Shifter",
    website: "https://www.getshifter.io",
    purpose: "Static site generator for WordPress and hosting platform.",
  },
  {
    key: "2",
    name: "Gatsby",
    website: "http://gatsbyjs.org/",
    purpose: "Static site generator and JavaScript framework built-on React.",
  },
  {
    key: "3",
    name: "WPGraphQL",
    website: "https://www.wpgraphql.com/",
    purpose:
      "Open-source WordPress plugin that provides an extendable GraphQL schema.",
  },
  {
    key: "4",
    name: "Netlify",
    website: "https://www.netlify.com/",
    purpose: "Static site hosting platform.",
  },
  {
    key: "5",
    name: "GitHub Actions",
    website: "https://github.com/features/actions",
    purpose: "Workflow automation for GitHub projects.",
  },
  {
    key: "6",
    name: "WordPress",
    website: "https://wordpress.org",
    purpose: "Open-source content management system.",
  },
]

const columns = [
  {
    title: "Service / Tool",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Website",
    dataIndex: "website",
    key: "website",
  },
  {
    title: "Purpose",
    dataIndex: "purpose",
    key: "purpose",
  },
]

const HomepageLayout = ({ pageNumber, location, children }) => (
  <Layout>
    <SiteHeader location={location} />
    {!pageNumber ? (
      <Row
        type="flex"
        justify="center"
        style={{ padding: `75px 75px 50px 75px` }}
      >
        <Col xs={24} style={{ textAlign: `center` }}>
          <div style={{ marginBottom: `2rem` }}>
            <h1>Shifter + Gatsby + GitHub Actions</h1>
          </div>
          <Row
            type="flex"
            justify="center"
            align="middle"
            style={{ marginBottom: `2rem` }}
          >
            <Col xs={24}>
              <Row type="flex" justify="center" align="middle">
                <Col>
                  <Row type="flex" justify="end">
                    <img
                      style={{ height: `100px`, width: `auto` }}
                      src={shifterLogo}
                      alt="Shifter Logo"
                    />
                  </Row>
                </Col>
                <Col>
                  <span style={{ fontSize: `3rem`, padding: `10px` }}>+</span>
                </Col>
                <Col>
                  <Row type="flex" justify="start">
                    <img
                      style={{ height: `100px`, width: `auto` }}
                      src={gatsbyLogo}
                      alt="Gatsby Logo"
                    />
                  </Row>
                </Col>
                <Col>
                  <span style={{ fontSize: `3rem`, padding: `10px` }}>+</span>
                </Col>
                <Col>
                  <Row type="flex" justify="start">
                    <img
                      style={{ height: `100px`, width: `auto` }}
                      src={githubLogo}
                      alt="GitHub Logo"
                    />
                  </Row>
                </Col>
                <Col>
                  <span style={{ fontSize: `3rem`, padding: `10px` }}>+</span>
                </Col>
                <Col>
                  <Row type="flex" justify="start">
                    <img
                      style={{ height: `100px`, width: `100px` }}
                      src={wordpressLogo}
                      alt="WordPress Logo"
                    />
                  </Row>
                </Col>
                <Col>
                  <span style={{ fontSize: `3rem`, padding: `10px` }}>+</span>
                </Col>
                <Col>
                  <Row type="flex" justify="start">
                    <img
                      style={{ height: `100px`, width: `100px` }}
                      src={wpgraphqlLogo}
                      alt="WPGraphQL Logo"
                    />
                  </Row>
                </Col>
                <Col>
                  <span style={{ fontSize: `3rem`, padding: `10px` }}>+</span>
                </Col>
                <Col>
                  <Row type="flex" justify="start">
                    <img
                      style={{ height: `100px`, width: `100px` }}
                      src={netlifyLogo}
                      alt="Netlify Logo"
                    />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <div>
            <p style={{ fontSize: `1.5rem` }}>
              Example site using Shifter, WordPress, WPGraphQL, Gatsby, Netlify,
              and GitHub Actions.
            </p>
            <div style={{ fontSize: `1.2rem` }}>
              <p>
                The content of this site was sourced using{` `}
                <a
                  href="https://wpgraphql.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WPGraphQL
                </a>
                {` `}from a WordPress site hosted on{` `}
                <a href="https://www.getshifter.io">Shifter</a>.
              </p>
              <p>The builds, hosting, and deployment are fully-automated.</p>
              <Table
                style={{ marginTop: `3rem`, marginBottom: `3rem` }}
                dataSource={dataSource}
                columns={columns}
                pagination={false}
              />
            </div>
            <a
              href="https://github.com/getshifter/shifter-gatsby-github-actions-starter"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button icon="code" type="primary">
                View Source Code
              </Button>
            </a>
            {` `}
            <a
              href="https://cranky-hypatia2216.on.getshifter.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button icon="link" type="primary">
                View static WordPress site
              </Button>
            </a>
            {` `}
            <a
              href="https://www.getshifter.io/blog"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button icon="link" type="primary">
                Learn More
              </Button>
            </a>
          </div>
        </Col>
      </Row>
    ) : null}
    <Row
      type="flex"
      justify="space-around"
      style={{
        background: `transparent`,
        padding: `24px`,
      }}
    >
      <Col xs={24} md={18}>
        <Content
          style={{
            minHeight: `calc(100vh - 134px)`,
            padding: `50px 50px`,
            background: `#ffffff`,
          }}
        >
          {children}
        </Content>
      </Col>
    </Row>
  </Layout>
)

export default HomepageLayout

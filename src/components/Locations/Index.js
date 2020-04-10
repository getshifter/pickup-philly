import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useStaticQuery, graphql } from 'gatsby';
import CaseStudyCard from '../card/index';

const Locations = () => {
  const data = useStaticQuery(
    graphql`
      query LOCATIONS {
        wpgraphql {
          showcase: graphql_all_locations(
            first: 100
          ) {
            nodes {
              id
              title
              slug
            }
          }
        }
      }
    `,
  );

  const studies = data.wpgraphql.showcase.nodes;

  return (
    <section className="section-row">
      <Container>
        <Row>
          {studies.map((post) => (
            <Col className="mb-gutter" md="6" key={post.id}>
              <CaseStudyCard data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Locations;
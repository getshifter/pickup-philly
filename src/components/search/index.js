import React, { Component } from "react"
import Typed from "react-typed"
import { useStaticQuery, graphql } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  connectSearchBox,
  Configure,
  connectHits,
  connectHitInsights,
  connectHighlight,
  connectPagination,
  Snippet,
} from "react-instantsearch-dom"
import {
  Container,
  Row,
  Col,
  Form,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  ListGroup,
  Pagination,
  PaginationItem,
  Button,
} from "reactstrap"
import { createLocalLink } from "../../utils"

const algoliaClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const SearchBox = ({ currentRefinement, refine }) => {
  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        graphql_all_location_categories {
          nodes {
            name
            id
          }
        }
      }
    }
  `)

  const placeholderSearchTerms = data.wpgraphql.graphql_all_location_categories.nodes.map(term => `Search ` + term.name)

  return (
    <Form noValidate action="" role="search" className="input-group-lg mb-3">
      <Typed
        strings={placeholderSearchTerms}
        typeSpeed={150}
        backSpeed={100}
        attr="placeholder"
        loop
        smartBackspace
      >
        <input
          type="search"
          className="form-control"
          value={currentRefinement}
          placeholder="Search Pickup Philly"
          onChange={event => refine(event.currentTarget.value)}
        />
      </Typed>
    </Form>
  )
}

const CustomSearchBox = connectSearchBox(SearchBox)

const SearchPagination = ({
  currentRefinement,
  nbPages,
  refine,
  createURL,
}) => {
  const previousPage = currentRefinement - 1
  const nextPage = currentRefinement + 1

  if (nbPages === 0) {
    return null
  }

  return (
    <Pagination listClassName="d-flex justify-content-between mt-3">
      <PaginationItem>
        <Button
          disabled={currentRefinement === 1 ? true : false}
          color="white"
          href={createURL(previousPage)}
          onClick={event => {
            event.preventDefault()
            refine(previousPage)
          }}
        >
          Previous Page
        </Button>
      </PaginationItem>
      <span className="text-monospace">
        <span className="h3 text-white">{currentRefinement}</span>
        {" / "}
        <small>{nbPages}</small>
      </span>
      <PaginationItem>
        <Button
          disabled={currentRefinement === nbPages ? true : false}
          color="white"
          href={createURL(nextPage)}
          onClick={event => {
            event.preventDefault()
            refine(nextPage)
          }}
        >
          Next Page
        </Button>
      </PaginationItem>
    </Pagination>
  )
}

const CustomPagination = connectPagination(SearchPagination)

const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: "_highlightResult",
    attribute,
    hit,
  })

  return (
    <span>
      {parsedHit.map((part, index) =>
        part.isHighlighted ? (
          <mark key={index}>{part.value}</mark>
        ) : (
          <span key={index}>{part.value}</span>
        )
      )}
    </span>
  )
}

const CustomHighlight = connectHighlight(Highlight)

const searchClient = {
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          processingTimeMS: 0,
        })),
      })
    }

    return algoliaClient.search(requests)
  },
}

class Search extends Component {
  render() {
    return (
      <section className="search text-white bg-blue">
        <Container>
          <Row className="justify-content-md-center">
            <Col md={10}>
              <div className="">
                <InstantSearch
                  searchClient={searchClient}
                  indexName="wp_posts_post"
                >
                  <Configure
                    clickAnalytics
                    hitsPerPage={5}
                    attributesToSnippet={["content"]}
                  />
                  <CustomSearchBox />
                  <CustomHits />
                  <CustomPagination />
                </InstantSearch>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

const Hit = ({ hit }) => (
  <ListGroupItem>
    <ListGroupItemHeading>
      <a href={createLocalLink(hit.permalink)}>
        <CustomHighlight hit={hit} attribute="post_title" />
      </a>
    </ListGroupItemHeading>
    <ListGroupItemText className="text-body">
      <Snippet hit={hit} attribute="content" tagName="mark" />
    </ListGroupItemText>
  </ListGroupItem>
)

const HitWithInsights = connectHitInsights()(Hit)

const Hits = ({ hits }) => (
  <ListGroup>
    {hits.map(hit => (
      <HitWithInsights key={hit.objectID} hit={hit} />
    ))}
  </ListGroup>
)

const CustomHits = connectHits(Hits)

export default Search

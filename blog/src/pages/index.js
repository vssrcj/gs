import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from 'gatsby-image';

const IndexPage = ({ data }) => {
  console.log({ data });
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {data.allStrapiArticle.edges.map(document => (
          <li key={document.id}>
            <h2>
              <Link to={`/${document.node.id}`}>{document.node.title}</Link>
            </h2>
            <Img fixed={document.node.image.childImageSharp.fixed} />
            <p>{document.node.content}</p>
          </li>
        ))}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;

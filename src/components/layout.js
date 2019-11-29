import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Footer from './footer'
import Header from './header'

const LayoutStyles = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: minmax(auto, 1/3fr) 1fr minmax(auto, 1/3fr);
  grid-gap: 16px;

  grid-template-areas: 'header header header' '. main .' 'footer footer footer';
`

const MainStyles = styled.main`
  grid-area: main;

  margin: 0 auto;
  padding: 2rem;
  /* max-width: 500px; */
`

const Layout = ({ children }) => (
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
      <LayoutStyles>
        <Header siteTitle={data.site.siteMetadata.title} />

        <MainStyles>{children}</MainStyles>

        <Footer />
      </LayoutStyles>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

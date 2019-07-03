import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Footer from './footer'
import Header from './header'
import './layout.css'

const LayoutStyles = styled.div`
    /* display: grid;
    grid-template-rows: 1fr minmax(1fr, auto) 1fr;
    grid-template-columns: 1fr minmax(1fr, auto) 1fr;
    grid-template-areas: 'header header header' '. main. ' 'footer footer footer'; */

    height: 100vh;

    display: grid;
    grid-template-rows: auto 1fr auto;
    /* grid-template-columns: minmax(auto, 100px) 1fr minmax(auto, 100px); */
    grid-template-columns: minmax(auto, 1/3fr) 1fr minmax(auto, 1/3fr);
    /* grid-template-columns: auto 1fr auto; */
    grid-gap: 10px;

    grid-template-areas: 'header header header' '. main .' 'footer footer footer';
`

const MainStyles = styled.main`
    grid-area: main;

    margin: 0 auto;
    max-width: 960px;
    /* padding: 0px 1.0875rem 1.45rem; */
    /* padding-top: 0; */
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

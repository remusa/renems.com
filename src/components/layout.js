import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Footer from './footer'
import Header from './header'
import './layout.css'

const MainStyles = styled.div`
    margin: 0 auto;
    max-width: 960;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
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
            <>
                {/* <Menu /> */}

                <Header siteTitle={data.site.siteMetadata.title} />

                <MainStyles className='container-main'>
                    <main>{children}</main>
                </MainStyles>

                <Footer />
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

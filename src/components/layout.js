import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Footer from './footer'
import Header from './header'
import './layout.css'
import Menu from './menu'

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
                <Menu />

                <Header siteTitle={data.site.siteMetadata.title} />

                <div
                    className='container-main'
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `0px 1.0875rem 1.45rem`,
                        paddingTop: 0,
                    }}>
                    <main>{children}</main>

                    <Footer />
                </div>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NowPage = () => (
    <Layout>
        <SEO title='Now' keywords={[`now`]} />

        <h1>Now</h1>

        <p>I see being a developer as my craft, so I'm always trying to improve.</p>

        <p>
            Nowadays I'm more focused on fullstack JavaScript (mainly React, Node and GraphQL) and
            some Python (Django) here and there.
        </p>

        <p>Currently focused on learning: </p>
        <ul>
            <li>More GraphQL! The whole ecosystem is enjoyable</li>
            <li>Django REST Framework</li>
            <li>Svelte next?</li>
        </ul>
    </Layout>
)

export default NowPage

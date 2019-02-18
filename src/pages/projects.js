import React from 'react';
import Layout from '../components/layout';
import Projects from '../components/projects';
import SEO from '../components/seo';

const ProjectsPage = () => (
    <Layout>
        <SEO title='Projects' keywords={[`gatsby`, `application`, `react`]} />

        <Projects />
    </Layout>
)

export default ProjectsPage

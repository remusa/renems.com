import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
    <Layout>
        <SEO title='About' keywords={[`about`]} />

        <h1>About Me</h1>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id tempor quam.
            Curabitur et molestie magna. Mauris nec nisi vehicula, placerat lectus ut, consequat
            nibh. Nulla viverra faucibus ex, vitae condimentum sapien luctus ut. Integer vel
            ultrices tortor, at consequat nulla. Nulla mattis convallis arcu vitae commodo. Aliquam
            finibus molestie nibh nec interdum. Phasellus sit amet est sagittis neque auctor
            imperdiet. Vivamus at sapien non eros maximus convallis. In ultricies, lorem sed
            fermentum rutrum, erat felis dapibus odio, in rhoncus tellus diam vel magna. Vestibulum
            dictum viverra eleifend. Quisque malesuada consectetur lacus elementum ornare.
        </p>

        <p>
            Quisque pharetra suscipit tortor, quis ultricies lectus bibendum aliquet. Suspendisse
            vel tincidunt ex. Vestibulum est odio, laoreet et eros at, aliquam pretium sem.
            Vestibulum ullamcorper quis eros a rutrum. Duis porttitor, tortor ac egestas vehicula,
            orci leo blandit lorem, scelerisque dignissim dui nunc id quam. Cras et hendrerit purus.
            Etiam viverra lacus quis sapien euismod fermentum. Duis tortor lorem, iaculis placerat
            ante ut, placerat commodo dolor. Morbi accumsan posuere purus, ac sodales lacus. Donec
            quam elit, scelerisque non mauris nec, finibus semper est. Quisque auctor accumsan
            sodales. Fusce vulputate ornare mauris, sed consectetur sem feugiat a.
        </p>

        <p>
            Vestibulum ante erat, porta at odio ut, convallis tempor tortor. Quisque lacinia dolor
            at convallis mattis. Donec vitae rutrum mauris. Aliquam eget euismod ante, non molestie
            nibh. Quisque dictum nisi mauris, quis fermentum sem tincidunt ut. Praesent pharetra at
            nunc non dapibus. Integer finibus sit amet tortor a viverra. Proin ligula augue,
            vestibulum et nisi hendrerit, imperdiet iaculis odio. In hac habitasse platea dictumst.
            Duis sit amet tempor orci, nec luctus diam. Donec eu est ut dolor dictum ornare sit amet
            sed arcu. Quisque pellentesque risus enim, quis egestas quam tempus sit amet.
        </p>
    </Layout>
)

export default AboutPage

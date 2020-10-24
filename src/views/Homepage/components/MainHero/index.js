import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import './herostyles.scss';

function MainHero() {

    const { file } = useStaticQuery(graphql`
        query{
            file(relativePath: {eq: "mainhero.png"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <BackgroundImage className="main-hero" fluid={file.childImageSharp.fluid}>

        </BackgroundImage>
    );
}

export default MainHero;
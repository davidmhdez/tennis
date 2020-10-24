import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { LinkButton } from '../../../../components/Button';
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
            <div className="hero-container">
                <h2>Las mejores raquetas para jugar <span>Tennis</span></h2>
                <LinkButton text="ACERCA DE NOSOTROS"/>
            </div>
        </BackgroundImage>
    );
}

export default MainHero;
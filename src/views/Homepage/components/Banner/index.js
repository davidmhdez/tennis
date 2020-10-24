import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './bannerstyles.scss';

function Banner() {

    const { file } = useStaticQuery(graphql`
        query{
            file(relativePath: {eq: "banner.png"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Img className="" fluid={file.childImageSharp.fluid}/>
    );
}

export default Banner;
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';
import './productcard.scss';

function ProductCard({ind}) {

    const { file } = useStaticQuery(graphql`
        query{
            file(relativePath: {eq: "racket.png"}){
                childImageSharp{
                    fixed(width: 288){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <div className="product-card">
            <Img fixed={file.childImageSharp.fixed}/>
            <span>{ind}</span>
        </div>
    );
}

ProductCard.defaultProps = {
    ind: 0
}

export default ProductCard;
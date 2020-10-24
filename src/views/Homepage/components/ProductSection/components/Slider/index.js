import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import nextbutton from '../../../../../../images/next-icon.svg';
import './sliderstyles.scss';

function Slider() {

    const { file } = useStaticQuery(graphql`
        query{
            file(relativePath: {eq: "sliderbg.png"}){
                childImageSharp{
                    fixed(width: 530){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    const [ position, setPosition ] = useState(1);

    return (
        <div className="slider">
            <BackgroundImage className="slider-bg" fixed={file.childImageSharp.fixed}>
                <div className="container">
                    <h5>Nuestras <span>Raquetas</span></h5>
                    <p>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
                    <div className="steps">
                        <div className={position === 1 && 'active'}></div>
                        <div className={position === 2 && 'active'}></div>
                        <div className={position === 3 && 'active'}></div>
                        <div className={position === 4 && 'active'}></div>
                    </div>
                    <div className="slider-controls">
                        <button id="prev" onClick={()=>{
                            const p = position-1;
                            if(p === 0 ){
                                setPosition(4);
                            }else{
                                setPosition(p);
                            }
                        }}>
                            <img src={nextbutton} alt="next-icon"/>
                        </button>
                        <button id="next" onClick={()=>{
                            const p = position+1;
                            if(p === 5 ){
                                setPosition(1);
                            }else{
                                setPosition(p);
                            }
                        }}>
                            <img src={nextbutton} alt="next-icon"/>
                        </button>
                    </div>
                </div>
            </BackgroundImage>
        </div>
    );
}

export default Slider;
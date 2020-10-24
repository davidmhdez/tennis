import { Link } from 'gatsby';
import React from 'react';
import './footerstyles.scss';
import linkedin from '../../images/linkedin.svg';
import vimeo from '../../images/vimeo.svg';
import instagram from '../../images/instagram.svg';
import twitter from '../../images/twitter.svg';
import facebook from '../../images/facebook.svg';
import logo from '../../images/logo.svg';

function Footer() {
    return (
        <footer>
            <nav>
                <ul className="page-nav">
                    <li>
                        <Link className="active" to="/" >Inicio</Link>
                    </li>
                    <li>
                        <Link to="/" >Acerca de nosotros</Link>
                    </li>
                    <li>
                        <Link to="/" >Historia</Link>
                    </li>
                    <li>
                        <Link to="/" >Contacto</Link>
                    </li>
                </ul>
                <ul className="social-networks">
                    <li>
                        <Link to="/">
                            <img src={linkedin} alt="linkedin-icon"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={vimeo} alt="vimeo-icon"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={instagram} alt="instagram-icon"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={twitter} alt="twitter-icon"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={facebook} alt="facebook-icon"/>
                        </Link>
                    </li>
                </ul>
            </nav>
            <img className="footer-logo" src={logo} alt="logo-footer"/>
        </footer>
    );
}

export default Footer;
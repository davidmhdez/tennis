import React from 'react';
import { Link } from 'gatsby';

function Navigation() {
    return (
        <ul>
            <li>
                <Link activeClassName='active-page' to="/" >Inicio</Link>
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
    );
}

export default Navigation;
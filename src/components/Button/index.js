import { Link } from 'gatsby';
import React from 'react';
import ArrowSVG from './ArrowSVG';
import './buttonstyles.scss';

export function LinkButton({to, theme, text, ...rest}) {
    return (
        <Link 
            className={`linkbutton ${theme ? `linkbutton-${theme}` : ''}`}
            {...rest} 
            to={to}
        >
            {text} 
            <ArrowSVG/>
        </Link>
    );
}

LinkButton.defaultProps = {
    to: '/',
    text: 'BUTTON'
}


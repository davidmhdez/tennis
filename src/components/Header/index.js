import React from 'react';
import LanguageSwitch from './components/LanguageSwitch';
import Navigation from './components/Navigation';
import './headerstyles.scss';
import logo from '../../images/logo.svg';

function Header() {
    return (
        <header>
            <img src={logo} alt="logo"/>
            <nav>
                <Navigation/>
                <LanguageSwitch/>
            </nav>
        </header>
    );
}

export default Header;
import React, {useState, useEffect} from 'react';
import LanguageSwitch from './components/LanguageSwitch';
import Navigation from './components/Navigation';
import './headerstyles.scss';
import logo from '../../images/logo.svg';
import bars from '../../images/bars.svg';

function Header() {

    const [scrolled, setScrolled] = useState(false);  

    useEffect(() => {
        const handleScroll = () => {
        const isScrolled = window.scrollY > 20;
        if (isScrolled !== scrolled) {
            setScrolled(!scrolled);
        }      
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

        return () => {      
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);


    return (
        <header 
            className={scrolled ? 'header-scroll' : ''} 
            data-active={scrolled} 
            scrolled={scrolled}
        >
            <img id="logo" src={logo} alt="logo"/>
            <input type="checkbox" id="mobile-menu"/>
            <label id="bars" htmlFor="mobile-menu">
                <img src={bars} alt="mobile-menu-icon"/>
            </label>
            <nav>
                <Navigation/>
                <LanguageSwitch/>
            </nav>
        </header>
    );
}

export default Header;
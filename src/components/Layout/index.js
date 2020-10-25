import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import './styles.scss';

function Layout(props) {
    return (
        <>
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </>
    );
}

export default Layout;
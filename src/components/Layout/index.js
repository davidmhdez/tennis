import React from 'react';
import Header from '../header';
import './styles.scss';

function Layout(props) {
    return (
        <>
            <Header/>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default Layout;
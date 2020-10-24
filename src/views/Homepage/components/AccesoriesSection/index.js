import React from 'react';
import { LinkButton } from '../../../../components/Button';
import './accesoriestyles.scss';

function AccesoriesSection() {
    return (
        <section className="accesories-section">
            <div className="container">
                <h3>Raquetas.Accesorios. Pelotas.</h3>
                <div className="c2">
                    <p>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
                    <LinkButton id="history" theme="black" text="HISTORIA"/>
                </div>
            </div>
        </section>
    );
}

export default AccesoriesSection;
import React from 'react';

function LanguageSwitch() {
    return (
        <div className="languaje-switch">
            <input type="radio" checked name="language" id="es"/>
            <label htmlFor="es" >ES</label>
            <input type="radio" name="language" id="en"/>
            <label htmlFor="en" >EN</label>
        </div>
    );
}

export default LanguageSwitch;
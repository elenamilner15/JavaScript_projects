import React, { useState } from 'react';
import './Phone.css';

function Phone() {
    const [brand] = useState('Samsung');
    const [model] = useState('Galaxy S20');
    const [color, setColor] = useState('black');
    const [year] = useState(2020);



    const changeColor = () => {
        setColor('red');
    };

    return (
        <div className="phone-container">
            <h2>My phone is a {brand}</h2>
            <p>It is a {color} {model} from {year}</p>
            <button onClick={changeColor}>Change Color to Red</button>
        </div>
    );
}

export default Phone;

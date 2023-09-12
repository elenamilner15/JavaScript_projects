import React, { useState } from 'react';
import Garage from './Garage';

function Car() {
    const carInfo = { name: "Ford", model: "Mustang" };


    const [color, setColor] = useState("yellow");


    return (
        <div>
            <h1>This {color} car is {carInfo.model}</h1>
            <Garage size="small" />

        </div>
    );
}

export default Car;


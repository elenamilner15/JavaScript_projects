import React from 'react';

function EnteredInfo(props) {
    return (
        <div>
            <h2>Entered information:</h2>
            <p>Your name: {props.name}</p>
            <p>Your age: {props.age}</p>
            <p>Your gender: {props.gender}</p>
            <p>Your destination: {props.destination}</p>
            <p>Your dietary restrictions:</p>
            <p>Nuts free: {props.nutsFree ? 'Yes' : 'No'}</p>
            <p>Lactose free: {props.lactoseFree ? 'Yes' : 'No'}</p>
            <p>Vegan meal: {props.vegan ? 'Yes' : 'No'}</p>
        </div>
    );
}

export default EnteredInfo;

import React, { useState } from 'react';

function Events() {
    const clickMe = () => {
        alert('I was clicked');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert('Enter pressed\n' + event.target.value);
        }
    };

    const [isToggleOn, setIsToggleOn] = useState(true);

    const toggleState = () => {
        setIsToggleOn(!isToggleOn);
    };


    return (
        <div className="events-container">
            <div className="section">
                <button onClick={clickMe}>Click Me</button>
            </div>
            <div className="section">
                <input
                    type="text"
                    placeholder="Press Enter"
                    onKeyDown={handleKeyDown}
                />
            </div>

            <div className="section">
                <button onClick={toggleState}>
                    {isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>

            <div className="section">
                <input
                    type="text"
                    placeholder="Exercise 9:"
                />
                <button onClick={toggleState}>
                    {isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>

        </div>

    );
}

export default Events;

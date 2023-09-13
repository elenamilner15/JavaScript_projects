import React, { Component } from 'react';
import './Exercise3.css';


const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};


class Exercise extends React.Component {
    render() {
        return (
            <div classname="exercise-container">

                <h1 style={style_header}>This is a Header</h1>
                <div className="para"><p>This is a paragraph</p></div>
                <a href="https://react.dev/">The link to React</a>

                <form>
                    <label> Enter your name:
                        <input type="text" name="name" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <br />
                <img src="1.jpg" />
                <ul>
                    <li>Example 1</li>
                    <li>Example 2</li>
                    <li>Example 3</li>
                </ul>
            </div>
        );
    }
}

export default Exercise;

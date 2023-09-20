import React, { Component } from "react";
import data from "./data.json";

class Example1 extends Component {
    render() {
        return (
            <div>
                <h2>Example1 Component:</h2>
                {data.SocialMedias.map((socialMedia, index) => (
                    <div key={index}>{socialMedia}</div>
                ))}
            </div>
        );
    }
}

export default Example1;

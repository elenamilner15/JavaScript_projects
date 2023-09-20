import React, { Component } from "react";
import data from "./data.json";

class Example2 extends Component {
    render() {
        return (
            <div>
                <h2>Example2 Component:</h2>
                {data.Skills.map((skillArea, index) => (
                    <div key={index}>
                        <p>{skillArea.Area}</p>
                        <ul>
                            {skillArea.SkillSet.map((skill, subIndex) => (
                                <li key={subIndex}>{skill.Name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    }
}

export default Example2;

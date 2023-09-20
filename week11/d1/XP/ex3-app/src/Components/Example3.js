import React, { Component } from "react";
import data from "./data.json";

class Example3 extends Component {
    render() {
        return (
            <div>
                <h2>Example3 Component:</h2>
                {data.Experiences.map((experience, index) => (
                    <div key={index}>
                        <img src={experience.logo} alt="Company Logo" />
                        <p>{experience.companyName}</p>
                        {experience.roles.map((role, subIndex) => (
                            <div key={subIndex}>
                                <p>{role.title}</p>
                                <p>{role.startDate}{role.location}</p>
                                <p>{role.description}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Example3;

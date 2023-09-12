import React, { useState } from 'react';
import './Vote.css';

function Vote() {
    const [languages, setLanguages] = useState([
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaScript", votes: 0 },
        { name: "Java", votes: 0 }
    ]);

    const handleVote = (languageIndex) => {
        setLanguages((prevLanguages) => {
            const updatedLanguages = [...prevLanguages];
            updatedLanguages[languageIndex] = {
                ...updatedLanguages[languageIndex],
                votes: updatedLanguages[languageIndex].votes + 1,
            };
            return updatedLanguages;
        });
    };



    return (

        <div className="vote-container">
            <h1>Vote Your Language</h1>

            {languages.map((language, index) => (
                <div key={index} className="language">
                    <div className="votes">{language.votes}</div>
                    <div className="names">{language.name}</div>
                    <button className="button" onClick={() => handleVote(index)}> Click Here
                    </button>
                </div>
            ))}

        </div>
    );
}

export default Vote;

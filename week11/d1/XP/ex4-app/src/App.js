import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [responseData, setResponseData] = useState(null);

  const handleButtonClick = async () => {
    try {
      const response = await axios.post("http://localhost:3001/proxy", {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27,
      });
      setResponseData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">

      <button onClick={handleButtonClick}>Press me to post some Data</button>
      {responseData && (
        <div>
          <h2>Response Data</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
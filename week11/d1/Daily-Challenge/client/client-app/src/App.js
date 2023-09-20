import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '',
    inputValue: '',//Part 2
  };

  componentDidMount() {
    this.fetchMessage();
  }

  fetchMessage = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/hello');;
      const data = await response.json();
      this.setState({ message: data.message });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  //Part2
  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: this.state.inputValue }),
      });
      const data = await response.json();
      this.setState({ message: data.message });
      console.log('Response from server:', data.message);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
  //

  render() {
    return (
      <div className="App">
        <h2>{this.state.message}</h2>
        {/* Part2 */}
        <h2>Post to Server:</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type something"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        {/* Part2 */}
      </div>
    );
  }
}

export default App;
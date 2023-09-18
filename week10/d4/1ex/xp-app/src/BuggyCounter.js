import React, { Component } from 'react';


class BuggyCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count);
        if (this.state.counter === 5) {
            throw new Error('I crashed!');
        }
    }


    render() {
        if (this.state.count === 5) {
            throw new Error('I crashed!');
        }

        return (
            <div>
                <h1>Counter:</h1>
                <div>{this.state.count}</div>
                <button onClick={this.handleClick}>Add</button>

            </div>
        );
    }
}
export default BuggyCounter;

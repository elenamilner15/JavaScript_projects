import React, { Component } from 'react';

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: 'red',
        };
    }

    //Part1

    // componentDidMount() {
    //     alert('componentDidMount reached');
    //     this.setState({ favoriteColor: 'yellow' });
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return false;
    // }

    //Part2
    componentDidMount() {
        alert('componentDidMount reached');
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow' });
        }, 2000);
    }
    componentDidUpdate() {
        console.log('after update');
    }

    //Part3
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('in getSnapshotBeforeUpdate');
        return null;
    }



    changeColor = () => {
        this.setState({ favoriteColor: 'blue' });
    };

    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <button onClick={this.changeColor}>Change Color to Blue</button>
            </div>
        );
    }
}

export default Color;


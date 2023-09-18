import React, { Component } from 'react';

// Child
class Child extends Component {
    componentWillUnmount() {
        alert('The component named Header is about to be unmounted');
    }

    render() {
        return <h2>Hello World!</h2>;
    }
}


class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: 'red',
            show: true,
        };
    }


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

    ///////

    toggleShow = () => {
        if (this.state.show) {
            this.setState({ show: false });
        }
    };

    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <button onClick={this.changeColor}>Change Color to Blue</button>
                {this.state.show && <Child />}
                <div className="button-container">
                    <button onClick={this.toggleShow}>Delete Header</button>
                </div>
            </div>
        );
    }
}

export default Color;


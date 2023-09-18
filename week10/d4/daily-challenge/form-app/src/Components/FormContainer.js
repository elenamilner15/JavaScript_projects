import React, { Component } from 'react';
import FormComponent from './FormComponent';

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            lactoseFree: false,
            nutsFree: false,
            vegan: false,
        };
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'radio') {
            this.setState({ [name]: value });

        } else {

            type === 'checkbox'
                ? this.setState({ [name]: checked })
                : this.setState({ [name]: value });
        }
    };

    render() {
        return (
            <div>
                <div className="form-container">
                    <h1>Sample Form</h1>
                    <FormComponent
                        handleChange={this.handleChange}
                        data={this.state}

                    />
                </div>

                <hr></hr>


                <div className="entered-information">
                    <h2>Entered Information</h2>
                    <p>Your name: {`${this.state.firstName} ${this.state.lastName}`}</p>
                    <p>Your age: {this.state.age}</p>
                    <p>Your gender: {this.state.gender}</p>
                    <p>Your destination: {this.state.destination}</p>
                    <p>Your dietary restrictions:</p>
                    <p>Nuts free: {this.state.nutsFree ? 'Yes' : 'No'}</p>
                    <p>Lactose free: {this.state.lactoseFree ? 'Yes' : 'No'}</p>
                    <p>Vegan meal: {this.state.vegan ? 'Yes' : 'No'}</p>
                </div>
            </div>
        );
    }
}

export default FormContainer;

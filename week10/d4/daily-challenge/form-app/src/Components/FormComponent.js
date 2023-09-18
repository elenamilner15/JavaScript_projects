import React from 'react';
import EnteredInfo from './EnteredInfo';

function FormComponent(props) {
    let enteredInfoComponent = null;
    if (props.data.firstName) {
        enteredInfoComponent = (
            <EnteredInfo
                name={props.data.firstName}
                age={props.data.age}
                gender={props.data.gender}
                destination={props.data.destination}
                nutsFree={props.data.nutsFree}
                lactoseFree={props.data.lactoseFree}
                vegan={props.data.vegan}
            />
        );
    }
    return (
        <form>

            <input
                type="text"
                name="firstName"
                value={props.data.firstName}
                placeholder="First Name"
                onChange={props.handleChange}
            />
            <br />
            <input
                type="text"
                name="lastName"
                value={props.data.lastName}
                placeholder="Last Name"
                onChange={props.handleChange}
            />
            <br />
            <input
                type="number"
                name="age"
                value={props.data.age}
                placeholder="Age"
                onChange={props.handleChange}
            />
            <br />
            <label>
                Gender:
            </label>

            <div className="gender-options">
                <label>
                    <input
                        className="radio-input"
                        type="radio"

                        name="gender"
                        value="Male"
                        checked={props.data.gender === 'Male'}
                        onChange={props.handleChange}
                    />
                    <span className="circle"></span> Male
                </label>
                <br />
                <label>
                    <input
                        className="radio-input"
                        type="radio"

                        name="gender"
                        value="Female"
                        checked={props.data.gender === 'Female'}
                        onChange={props.handleChange}
                    />
                    <span className="circle"></span> Female
                </label>
            </div>

            {/* ////// */}




            <br />
            <label>
                Select Your Destination:
                <br />
                <select
                    name="destination"
                    value={props.data.destination}
                    onChange={props.handleChange}
                >
                    <option value="" disabled selected>
                        -- Please Choose a destination --
                    </option>
                    <option value="Japan">Japan</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Brazil">Brazil</option>
                </select>
            </label>

            <label>
                <div className="food-options">
                    <br />
                    Dietary restrictions:
                    <br />
                    <input
                        className="checkbox-input"
                        type="checkbox"
                        name="nutsFree"
                        checked={props.data.nutsFree}
                        onChange={props.handleChange}
                    /> Nuts free
                    <br />
                    <input
                        className="checkbox-input"
                        type="checkbox"
                        name="lactoseFree"
                        checked={props.data.lactoseFree}
                        onChange={props.handleChange}
                    /> Lactose free
                    <br />
                    <input
                        className="checkbox-input"
                        type="checkbox"
                        name="vegan"
                        checked={props.data.vegan}
                        onChange={props.handleChange}
                    /> Vegan
                </div>
            </label>
            <br />
            <button>Submit</button>

        </form>

    );
}

export default FormComponent;

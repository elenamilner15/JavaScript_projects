
import './App.css';
import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals'
import Exercise from './Exercise3'

const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;

const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};

function App() {
  return (

    <div className="app-container">
      <p> Hello World!</p>
      <p> {myelement}</p>
      <p>  React is {sum} times better with JSX</p>


      <h3> {user.firstName}</h3>
      <h3> {user.lastName}</h3>

      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      {/* <Exercise /> */}
    </div>
  );
}

export default App;

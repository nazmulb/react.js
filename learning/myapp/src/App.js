import React from 'react';
import Person from './Person/Person';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>I am a react app</h1>
      <Person name="Nazmul" age="39" />
      <Person name="Nabil" age="10">My Hobbies: Racing</Person>
      <Person name="Nahiyan" age="9" />
    </div>
  );
};

export default App;

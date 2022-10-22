import React from 'react';
import './App.css';
import CountersComponent from './components/counter/countersComponent';
import NavBar from './components/navBar';

function App() {
  return (
    <React.Fragment>
      <NavBar label="Title"/>
      <main className="container">
        <CountersComponent />
      </main>
    </React.Fragment>
  );
}

export default App;

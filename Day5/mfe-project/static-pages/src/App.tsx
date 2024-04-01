import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './component/HomePage';
import ErrorPage from './component/ErrorPage';

export type User = {id : number, name : string};


function App() {
  return (
    <div className="App">
      <HomePage user = {{id :1, name : "test"}} logout={() => {}} />      <ErrorPage />
    </div>
  );
}

export default App;

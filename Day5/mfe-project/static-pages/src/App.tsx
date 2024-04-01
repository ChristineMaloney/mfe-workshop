import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './component/HomePage';
import ErrorPage from './component/ErrorPage';


function App() {
  return (
    <div className="App">
      <HomePage />
      <ErrorPage />
    </div>
  );
}

export default App;

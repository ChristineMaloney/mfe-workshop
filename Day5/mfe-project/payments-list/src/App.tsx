import React from 'react';
import logo from './logo.svg';
import './App.css';
import Transactions from './component/Transactions';

function App() {
  return (
    <div className="App">
      <h1>This is payments list MFE</h1>
      <Transactions serverUrl="http://somewhere.com"/>
    </div>
  );
}

export default App;

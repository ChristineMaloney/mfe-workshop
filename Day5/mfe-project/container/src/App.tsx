import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import TransactionsRemote from './TransactionsRemote';
import HomePageRemote from './HomePageRemote';
import ErrorPageRemote from './ErrorPageRemote';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <h1>This is the container</h1>
      {/* display transactions here */}
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/transactions">Transactions</Link>
      <Link to="/something">404</Link>
      <Routes>
        <Route path= "/transactions" element = {<TransactionsRemote />} />
        <Route path= "/" element = {<HomePageRemote />} />
        <Route path= "/*" element = {<ErrorPageRemote />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

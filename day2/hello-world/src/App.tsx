import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import SongList from './components/song/SongList';
// import './components/Footer.css';

function App() {
  return (
    //don't need Fragment or import Fragment if you just use <></>
    <Fragment>
      <Greeting name='Tamsin' age={21}/>
      <Greeting name='Anjan' age={22}/>
      {/* <Menu /> */}
      <SongList/>
      {/* <Song name="song name here" artist="song artist here"/> */}
      <Footer />
    </Fragment>
  );
}

export default App;

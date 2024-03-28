import { useState } from 'react';
import './App.css';
import CanDrink from './components/CanDrink/CanDrink';
import Greeting from './components/Greeting/Greeting'
import SongList from "./components/Songs/SongList";
import SongType from './components/Songs/SongTypes';

export type PersonObject = {name: string, age: number} 

function App() {

  //const matt : PersonObject= {name: "matt", age: 19}
  //creating matt object and function setMatt
  //when we call useState() 
  // it returns [] with 2 things in it
  //from useState, the function will always be a setter
  //[ variable , function that can change ]
  const [matt, setMatt] = useState<PersonObject>({
    name: "Matt",
    age:19
  });

  //the reason we are creating haveBirthday instead of passing setMatt is to
  //restrict what the child component can do
  const haveBirthday = () => {
    //... = spread operator
    //the yellow () are required -funky - reisit why 
    setMatt((matt) => ({...matt, age: matt.age+1}))

    //can't do 
    //matt.age = matt.age+1

    //also can't do this! Because of memory (see day3 notes)
    /* const newMatt = matt;
    newMatt.age = newMatt.age +1;
    setMatt(newMatt);*/
  }

  return (
    <div>
      {/* pass a whole person object into just one prop*/}
      {/* previous solution without person object: 
        <Greeting name="Matt" age={21}/>
        <Greeting name="Sally" age={32}/>*/}
        <Greeting person = {matt}></Greeting>
        <CanDrink person = {matt} birthdayFunc={haveBirthday}/>
        <SongList />
    </div>
  );
}

export default App;

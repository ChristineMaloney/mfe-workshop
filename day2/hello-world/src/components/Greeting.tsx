import { useState } from "react";

type GreetingProps = {
    name : string,
    age : number;
}

const Greeting = (props: GreetingProps) : JSX.Element => {

    // long version 
    // const result = useState<number>(props.age);
    // const age = result[0]; 
    // const setAge = result[1]; //function you can call when you want to change age

    //using 
    const [age, setAge] = useState<number>(props.age);

    const handleClick = () : void => {
        console.log("button was clicked")
        // props should be treated as immutable.  Don't change props
        // props.age = props.age + 1;
        // allowed but not best practice setAge(age + 1);
        // if you are calling setter and you are manipulating the value you already have; below is best practice 
        setAge(age => age + 1);
        //stale state because setAge doesn't happen immediately
        //console.log(age);
    };

    const increaseAge = (addition: number) => {
        setAge(age + addition)
    }

    const buttonStyle = {color: "red", fontWeight: "bold"};

    return(
        <>
            <p>Hello {props.name}. You are {age} years old.</p>
            {/* onClick in react */}
            {/* in react, don't do onclick={handleClick()} () executes it */}
            <button style = {buttonStyle} onClick={handleClick}>Happy Birthday!</button>
            {/* with below syntax, this would run the function right away, fix is arrow function*/}
            {/* <button onClick={increaseAge(3)}>Happy 3rd Birthday!</button> */}
            <button style = {{color: "red", fontWeight: "bold"}} onClick={() => increaseAge(3)}>Happy 3rd Birthday!</button>
        </>
    )
}

export default Greeting;
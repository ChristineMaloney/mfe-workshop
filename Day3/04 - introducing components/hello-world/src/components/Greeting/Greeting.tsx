import './Greeting.css';
import { PersonObject } from '../../App';

type GreetingProps ={person: PersonObject};
// why do we have to use greeting props instead of just using Person Object?
// because there is more than one property / because there is a custom data type

const Greeting = (props: GreetingProps) : JSX.Element => {

    return (
        <div>
            <p className="greeting_text"> Hello {props.person.name}. You are {props.person.age} years old. </p>
        </div>
    );
}

export default Greeting;

// type GreetingProps = {name: string, age: number};
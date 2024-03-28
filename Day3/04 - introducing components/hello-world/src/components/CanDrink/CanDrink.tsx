import { PersonObject } from '../../App';

type CanDrinkProps = { person: PersonObject, birthdayFunc: () => void };


const CanDrink = (props: CanDrinkProps) :JSX.Element => {
    //for maintainability, it is good practice to not destructure your props
    //we don't do this so that it is clear that props are being used in JSX below
    //how you would destructure -> const {person} = props;
    //you may destructure if you are planning to change value
    let canDrinkUs: string = "you can't drink in America";
    let canDrinkEngland: string = "can't";

    if(props.person.age>=18){
        canDrinkEngland = "can";
    }

    if(props.person.age>=21){
        canDrinkUs = "you can drink in America";
    }

    return (
        //if person is over 21, they can drink in USA
        //if person is over 18, they can drink in England
        <div>
            <p>{props.person.name}, {canDrinkUs}</p>
            <p>{props.person.name}, you {canDrinkEngland} drink in England</p>
            <button onClick={props.birthdayFunc}>Happy Birthday!</button>
        </div>
    )

} 

export default CanDrink;
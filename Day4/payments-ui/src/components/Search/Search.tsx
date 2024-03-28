import { ChangeEvent, useEffect, useRef, useState } from 'react';
import './Search.css';

const Search = () : JSX.Element => {

    const firstInput = useRef<HTMLInputElement | null >(null);
    const [orderId, setOrderId] = useState<string>("");

// //worst react practice is to use useRef to get value of an input//can't write code to read input. need stateful to track 
    useEffect(()=> {
        firstInput.current?.focus();
    },[])

    const handleOrderIdChange = (e : ChangeEvent<HTMLInputElement>) => {
        setOrderId(e.target.value)
        console.log(e.target.value)
    }
//todo fix
    return (
        <div className="searchBox">
            <label htmlFor="orderId">Order Id:</label>
            <input onChange={handleOrderIdChange} value ={orderId} id="orderId" type="text" ref={firstInput} />
            <button onClick={() => console.log("Searching for"+orderId)}>Search</button>
        </div>
    );
}

export default Search

import { ChangeEvent, FormEvent, useReducer } from "react";
import { PaymentType, addNewTransaction } from "../../data/DataFunctions";
import { AxiosResponse } from "axios";

const AddTransaction = (): JSX.Element => {

    const initialValue : PaymentType = {
        id: null,
        orderId: "",
        date : new Date().toISOString().slice(0, 10),
        amount: 0,
        country: "",
        currency: "",
        taxCode : 0,
        taxRate : 0,
        type : "SALE"
    }

    //can reuse this same function for every form 
    const formReducer = (state : PaymentType, data : {field : string, value : any}) : PaymentType => {
        return {...state, [data.field] : data.value}
    }

    const [newTransaction, dispatch] = useReducer(formReducer, initialValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{
        dispatch({field: event.target.id, value : event.target.value });
    }


    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result : Promise<AxiosResponse<PaymentType>> = addNewTransaction(newTransaction);
        result.then ( (response) => {
                console.log(response.data);
        });
    }

    return <div>
        <form className="addTransactionsForm" onSubmit={handleSubmit}>
            <h2>New transaction</h2>
            <label htmlFor="orderId">Order Id</label>
            <input type="text" id="orderId" onChange={handleChange} value= {newTransaction.orderId}/>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" onChange={handleChange} value= {newTransaction.date}/>
            <br />
            <label htmlFor="country">Country</label>
            <input type="text" id="country" onChange={handleChange} value= {newTransaction.country}/>
            <br />
            <label htmlFor="currency">Currency</label>
            <input type="text" id="currency" onChange={handleChange} value= {newTransaction.currency} />
            <br />
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" onChange={handleChange} value= {newTransaction.amount}/>
            <br />
            <label htmlFor="taxCode">Tax Code</label>
            <input type="text" id="taxCode" onChange={handleChange} value= {newTransaction.taxCode}/>
            <br />
            <label htmlFor="taxRate">Tax Rate</label>
            <input type="text" id="taxRate" onChange={handleChange} value= {newTransaction.taxRate}/>
            <br />
            <label htmlFor="type">Type</label>
            <input type="text" id="type" onChange={handleChange} value= {newTransaction.type}/>
            <br />
            <button type="submit">Save</button>
        </form>


    </div>
}



export default AddTransaction;
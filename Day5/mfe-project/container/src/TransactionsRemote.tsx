import { useEffect, useRef } from "react";
import mount from 'payments_list/Transactions';

const TransactionsRemote = () : JSX.Element => {

    const transactions = useRef<HTMLDivElement>(null);

    //useEffect to make sure it exists 
    useEffect( () => {
      mount(transactions.current, {serverUrl : "https://payments.multicode.uk"});
    }, []);
  
    return (
      <div>
        {/* display transactions here */}
        <div ref = {transactions}></div>
      </div>
    );
}


export default TransactionsRemote;
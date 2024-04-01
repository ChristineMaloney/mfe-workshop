import { useEffect, useRef, useState } from "react";
import mount from 'payments_list/Transactions';

const TransactionsRemote = () : JSX.Element => {

  const [serverUrl, setServerUrl] = useState<string>("https://payments.multicode.uk");
  
    const transactions = useRef<HTMLDivElement>(null);

    //useEffect to make sure it exists 
    useEffect( () => {
      mount(transactions.current, {serverUrl : serverUrl});
    }, []);
  
    return (
      <div>
        {/* display transactions here */}
        <div ref = {transactions}></div>
      </div>
    );
}

export default TransactionsRemote;
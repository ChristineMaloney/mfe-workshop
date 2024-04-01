import ReactDOM from "react-dom/client";
import Transactions, { TransactionsProps } from "./component/Transactions";

const mount = (el : Element, props: TransactionsProps ) : void => {

const root = ReactDOM.createRoot(el);

root.render(<Transactions { ...props } />);
// above is a shortcut of :
// root.render(<Transactions serverUrl={props.serverUrl} />)

}

export default mount;
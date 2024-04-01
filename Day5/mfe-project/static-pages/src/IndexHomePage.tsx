import ReactDOM from "react-dom/client";
import HomePage from "./component/HomePage";


const mount = (el : Element) : void => {

const root = ReactDOM.createRoot(el);

root.render(<HomePage />)
}

export default mount;
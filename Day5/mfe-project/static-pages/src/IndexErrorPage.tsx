import ReactDOM from "react-dom/client";
import ErrorPage from "./component/ErrorPage";


const mount = (el : Element) : void => {

const root = ReactDOM.createRoot(el);

root.render(<ErrorPage />)
}

export default mount;
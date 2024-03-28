import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext, UserContextType } from "../../context/UserContext";

//use link not href to save from an extra server hop 
//Can also use NavLink
const Menu = () : JSX.Element => {

    const userContext = useContext<UserContextType>(UserContext);
    
    const login = () => {
        userContext.login({name:"Matt", role: "waiter"});
    }

    return (
        <ul className="nav">
            <li><Link to="/find">Find a transaction</Link></li>
            <li><Link to="/add">New transaction</Link></li>
            {userContext.user.name ==="" && <li><button onClick={login}>Log in</button></li>}
            {userContext.user.name !=="" && <li><button onClick={userContext.logout}>Log out</button></li>}

        </ul>
    );
}

export default Menu;

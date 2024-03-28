import { useContext } from "react";
import { UserContext, UserContextType } from "../../context/UserContext";

const Footer = () : JSX.Element => {

    const userContext = useContext<UserContextType>(UserContext);

    return (
        <ul className="">
            {userContext.user.name !== "" && <li>{userContext.user.name}</li>}
            {userContext.user.name === "" && <li>NotLoggedIn</li>}
        </ul>
    );
}

export default Footer;

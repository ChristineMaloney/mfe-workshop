import { User } from "../App";


export type HomePageProps = {user : User, logout : () => void}
 

const HomePage = (props: HomePageProps) : JSX.Element => {
    
    return <><p>Home Page</p>
    {props.user.id !== 0 && <button onClick={props.logout}>Logout</button>}    </>
} 

export default HomePage;
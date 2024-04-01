import { useEffect, useRef } from "react";
import mount from 'static_pages/HomePage';



const HomePageRemote = () : JSX.Element => {

    const homePage = useRef<HTMLDivElement>(null);

    //useEffect to make sure it exists (once page is first being rendered)
    useEffect( () => {
      mount(homePage.current);
    }, []);
  
    return (
      <div>
        {/* display staticPagesRemote here */}
        <div ref = {homePage}></div>
      </div>
    );
}


export default HomePageRemote;
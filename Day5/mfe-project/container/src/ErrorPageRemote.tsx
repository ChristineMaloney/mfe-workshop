import { useEffect, useRef } from "react";
import mount from 'static_pages/ErrorPage';



const ErrorPageRemote = () : JSX.Element => {

    const errorPage = useRef<HTMLDivElement>(null);

    //useEffect to make sure it exists (once page is first being rendered)
    useEffect( () => {
      mount(errorPage.current);
    }, []);
  
    return (
      <div>
        {/* display staticPagesRemote here */}
        <div ref = {errorPage}></div>
      </div>
    );
}


export default ErrorPageRemote;
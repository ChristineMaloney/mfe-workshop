// import { useState } from "react";
// import Song from "./Song";

// interface displayStyle{
//     display: string
// }
// const SongList = () : JSX.Element => {

//     const displayShow: displayStyle = {display: "block"}
//     const displayHide: displayStyle = {display: "none"}

//     // const handleClick = () : void => {
//     //     console.log("button was clicked")
//     // };

//     // const [display, setDisplay] = useState<string>("none");
//     // // const display = {display: "none"};

// function toggleDisplay():void{
//         if style.display === "block"
//         }
//     return(
//         //empty tag is fragment
//         <>
//         <h1>Your fav songs are:</h1>
//         <button onClick={handleClick}>show songs</button>
//         setDisplay()
//         <ul>
//             <Song name="WestCoast" artist="Coconut Records"/>
//             <Song name="Song Name" artist="artist"/>
//         </ul>
//         </>
//     )
// }

// export default SongList;

import Song from './Song';
import { useState } from 'react';

const SongList = () : JSX.Element => {

    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisibility = () : void => {
        setVisible(visible => !visible);
    }

    return (
        <div>
            <h2>Your favourite songs are:</h2>
            <button onClick={toggleVisibility}> {visible ? 'hide' : 'show'} songs</button>
            <ul style= {{display : visible ? 'block' : 'none'}}>
                <Song name="Last thing on my mind" artist="Steps"/>
                <Song name="If you're over me" artist="Years and years"/>
            </ul>
        </div>);
}

export default SongList;

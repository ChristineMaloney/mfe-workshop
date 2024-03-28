import { useState } from 'react';
import Song from './Song';
import SongType from './SongTypes';

const SongList = () : JSX.Element => {

    /****** part 3 stateful with arrays */
    const initialSongs: SongType[] = [
        {title: "Lasthing on my mind", artist: "Steps", votes:0},
        {title: "If you're over me", artist: "Years and year", votes:0},
        {title: "Master of Puppets", artist: "Metallica", votes:0},
        {title: "Another Brick in the awll", artist: "Pnk Floyd", votes:0}
    ];

    const [songs, setSongs] = useState<SongType[]> (initialSongs);

    const voteForSong = (idx: number) : void =>{
        //how to debug
        // debugger;
        //setSongs changing the number of votes for the specific song
        //deepcopy
        const newSongs = songs.map( ( s, index ) => 
            idx === index ? {...s, votes: s.votes + 1 }:s 
            )
            setSongs(newSongs)
    }

    const displaySongs: JSX.Element[] = songs.map( (s,index) => <Song key={index} song={s} 
    voteFunction={() => voteForSong(index) }/>);


    const [showSongs, setShowSongs] = useState<boolean>(true);
    // we use arrow function bc we don't want to call votefor song too early


    /*********PART 1******** NOT STATEFUL
    /*not stateful object creation
    const song1 : SongType  = {title: "Song1", artist: "Artist1"}
    const song2 : SongType =  {title: "Song1", artist: "Artist1"}
    */
    /*********PART 3******** STATEFUL WITHOUT ARRAYS 
   //stateful object creation 
   const [song1, setSong1] = useState<SongType> ({title: "Song1", artist: "Artist1", votes:0})
   const [song2, setSong2] = useState<SongType> ({title: "Song2", artist: "Artist2", votes:0})
    

   const songs = useState<SongType[]> = useState<SongType[]> (initialSongs);

   const changeSongs = () => {
    setSong1(song1 => ({...song1, title: "newSong1"}))
    setSong2(song2 => ({...song2, title: "newSong2"}))
   }

   const voteForSong1 = () => {
        setSong1(song1 => ({...song1, votes: song1.votes +1}))
   }
   const voteForSong2 = () => {
    /*  why do:
            setSong2(song2 => ({...song2, votes: song2.votes +1}))
        instead of:
            setSong2({...song2, votes: song2.votes +1})

        if you change song2 twice you are updating stale state
        by doing => you are telling it to use the external version 

        Summary: needed if you're going to manipulate more than once
        to avoid stale state
    

        setSong2(song2 => ({...song2, votes: song2.votes +1}))
        
   }*/

    return (
        //{} around setSong1 is binding it to the function
        <div>
            <h2>Your favourite songs are:</h2>
            <button onClick={ () => setShowSongs(!showSongs)}>Show/HideSongs</button>
            {/* conditional rendering ooperator && could be used for loading*/}
            { showSongs &&
            <ul>
                {/* 
                implimentation before arrays:
                <Song song = {song1} voteFunction={voteForSong1} />
                <Song song = {song2} voteFunction={voteForSong2}/>  
                */}  
                {displaySongs}        
            </ul>
}   

            {/* <button onClick={changeSongs}>Change Songs</button> */}
        </div>);
}

export default SongList;

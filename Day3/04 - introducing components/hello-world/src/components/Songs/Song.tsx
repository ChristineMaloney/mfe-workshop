import SongType from "./SongTypes";

const Song = (props: SongProps) : JSX.Element => {

    const handleClick = () => {
        //e.g. setSong1
        //example of passing a full setter down
        // moving this up to songlist and only passing down specific method so it restricts what 
        //can be done in SOng (child)
        // props.songSetter({...props.song, votes: props.song.votes + 1})
        props.voteFunction()
    }

    return (<li>{props.song.title} by {props.song.artist}. 
            Current votes: {props.song.votes}
            <button onClick={handleClick}>vote</button>
            </li>);
 }
 
 export default Song

 //song component is now getting a song 
 //ctrl space at end of word will auto import
 //previous version before creating new setters
 //type SongProps = {song: SongType, songSetter : (newSong: SongType) => void};

 type SongProps = {song: SongType, voteFunction: () => void };
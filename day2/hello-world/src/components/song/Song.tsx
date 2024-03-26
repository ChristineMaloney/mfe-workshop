
type SongProps = {
    name : string,
    artist : string;
}

const Song = (props : SongProps) : JSX.Element => {
    return(
        <li className="song">{props.name} by {props.artist}</li>
    )
}

export default Song;
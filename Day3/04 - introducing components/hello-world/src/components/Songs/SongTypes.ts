// const SongTypes = (props: SongProps) : JSX.Element => {
//     return (<li>{props.title} by {props.artist}</li>);
//  }
//type is like an interface in java ; definition of what an object will look like 
//interface in JS is a type but more
//votes? would make it optional
type SongType = {title: string, artist: string, votes: number};

export default SongType


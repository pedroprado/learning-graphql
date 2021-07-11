import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { getSong } from '../../query/query';
import LyricList from './lyricList/LyricList';
import LyricCreate from './lyricCreate/LyricCreate';

function SongDetail(props){
    const { loading, song } = props.data;

    const generateSongDetail = (loading, song) => {
        if(loading){
            return <div></div>;
        }
        if (!loading && !song){
            return <div>No song to display</div>
        }
        return (
            <div>
                <h4>{song.title}</h4>
                <LyricList lyrics={song.lyrics}/>
                <LyricCreate songId={song.id}/>
            </div>
        );
    }

    return(
        <div>
            <Link to="/">Back</Link>
            {generateSongDetail(loading, song)}
        </div>
    );
}

export default graphql(getSong, {
    options: (props) => { return { variables: {id: props.match.params.id}}}
})(SongDetail);
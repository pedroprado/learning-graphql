import React from 'react'
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { listSongs, deleteSong } from '../../query/query';

function SongList(props){
    const {songs, loading, refetch} = props.data;

    const onDeleteSong = id =>{
        props.mutate({
            variables: {id: id}})
            .then( () => refetch()) ;
    }
    
    const generateSongs = (loading, songs) => {
        if(loading || !songs){
            return <div></div>;
        }
        return (
            songs.map(song => 
                <div className="collection-item" key={song.id} style={{display:"flex", justifyContent:"space-between"}}>
                    <Link to={`/songs/${song.id}`}>
                        <li>{song.title}</li>
                    </Link>
                    <DeleteOutlinedIcon onClick={()=> onDeleteSong(song.id)}/>
                </div>
            )
        );
    };

    return(
        <div>
            <ul className="collection">
                {generateSongs(loading, songs)}
            </ul>
            <Link to="/songs/new" className="btn-floating  btn-larg red right">
                <AddIcon className="material-icons"/>
            </Link>
        </div>
     
    );
}

export default graphql(listSongs)(graphql(deleteSong)(SongList));
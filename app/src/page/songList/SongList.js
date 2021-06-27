import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';

function SongList(props){
    const {loading, songs} = props.data;

    const generateSongs = (loading, songs) => {
        if(loading || !songs){
            return <div></div>;
        }
        return (
            songs.map(song => <li key={song.id} className="collection-item">{song.title}</li>)
        );
    };

    return(
        <ul className="collection">
            {generateSongs(loading, songs)}
        </ul>
    );
}

const query = gql`
    {
        songs{
            id
            title
        }
    }
`;

export default graphql(query)(SongList);
import { useState } from 'react';
import { graphql } from 'react-apollo';
import { addLyricToSong } from '../../../query/query';

function LyricCreate(props){
    const [content, setContent]= useState(""); 
    const songId = props.songId;


    const onSubmit = event => {
        event.preventDefault();
        props.mutate({
            variables:{ content: content, songId: songId }
        }).then(resp => setContent(""));
    }

    return(
    <div>
        <form onSubmit={ event => onSubmit(event)}>
            <label>Add a Lyric</label>
            <input
                value={content}
                onChange={(event)=> setContent(event.target.value)}
            />
        </form>
    </div>
    );
}

export default graphql(addLyricToSong)(LyricCreate);
import { useState } from 'react';
import { graphql } from 'react-apollo';
import { Link , useHistory } from 'react-router-dom';
import { listSongs, addSong } from '../../query/query';

function SongCreate(props){
    const history = useHistory();
    const [title, setTitle] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        props.mutate({
            variables: {title: title},
            refetchQueries: [{ query: listSongs }]
        }).then( resp => {
            history.push('/')
        });
    }

    return(
        <div>
            <Link to="/">Back</Link>
            <h3>Create a New Song</h3>
            <form onSubmit={event => onSubmit(event) }>
                <label>Song Title:</label>
                <input
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                />
            </form>
        </div>
    );
}

export default graphql(addSong)(SongCreate);

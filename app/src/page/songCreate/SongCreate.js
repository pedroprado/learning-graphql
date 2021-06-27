import { useState } from 'react';
import gql from 'graphql-tag'

function SongCreate(props){
    const [title, setTitle] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div>
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

const addSong = gql`
    mutation {
        addSong(title: $title){
            id
            title
        }
    }
`;

export default SongCreate;

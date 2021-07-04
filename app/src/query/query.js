import gql from 'graphql-tag'


export const listSongs = gql`
{
    songs{
        id
        title
    }
}
`;

export const addSong = gql`
    mutation AddSong($title: String!) {
        addSong(title: $title){
            id
            title
        }
    }
`;

export const deleteSong = gql`
    mutation deleteSong($id: ID){
        deleteSong(id: $id){
            id
            title
        }
    }
`;

import gql from 'graphql-tag'


export const listSongs = gql`
{
    songs{
        id
        title
    }
}
`;

export const getSong = gql`
    query getSong($id: ID!){
        song(id: $id){
            id
            title
            lyrics{
                id
                likes
                content
            }
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

export const addLyricToSong = gql`
    mutation addLyricToSong($content: String, $songId:ID){
        addLyricToSong(content:$content, songId: $songId){
            id
            title
            lyrics{
                id
                likes
                content
        }
    }
}
`;

export const likeLyric = gql`
    mutation likeLyric($id:ID){
        likeLyric(id: $id){
            id
            likes
        }
    }
`;
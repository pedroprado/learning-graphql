import { graphql } from 'react-apollo';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { likeLyric } from '../../../query/query';

function LyricList(props){
    const { lyrics } = props;

    const onLike = (id, likes) => {
        props.mutate({
            variables:{ id: id},
            optimisticReponse: {
                likeLyric:{
                    id: id,
                    __typename: "LyricType",
                    likes: likes+1,
                }
            }
        });
    };

    return(
        <div>
            <p style={{fontWeight:"bold"}}>Lyrics</p>
            {lyrics.map(lyric => 
                <div key={lyric.id} style={{display:"flex", textAlign:'center', alignItems:'center'}}>
                    <p className="collection-item">
                        {lyric.content}
                    </p>
                    <div style={{marginLeft:"10px", marginRight:"10px", display:'flex', height:'20x', width:'20px'}}>
                        <ThumbUpIcon onClick={()=> onLike(lyric.id, lyric.likes)}/>
                    </div>
                    <p>{lyric.likes}</p>
                </div>
            )}
        </div>
    );
}

export default graphql(likeLyric)(LyricList);
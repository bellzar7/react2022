import {useParams} from "react-router-dom";
import Post from "../components/Post";

export default function PostPage(){
    let {postId} = useParams()

    return (
        <div>
            <Post postId={postId}/>
        </div>
    )
}
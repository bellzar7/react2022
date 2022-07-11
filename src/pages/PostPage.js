import {useParams} from "react-router-dom";
import Posts from "../components/posts/Posts";

export default function PostPage(){
    let {postId} = useParams()

    return (
        <div>
            <Posts postId={postId}/>
        </div>
    )
}
import {useEffect, useState} from "react";
import Post from "./Post";
import {getCurrentPost} from "../../services/api.service";

export default function Posts({postId}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getCurrentPost(postId).then(value => setPosts([{...value}]))
    }, [postId])

    return (
        <div>
            {posts.map(value => <Post key={value.id} item={value}/>)}
        </div>
    )
}
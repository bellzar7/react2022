import {useEffect, useState} from "react";
import {apiService} from "../services/api.services";
import PostComponent from "./PostComponent";

export default function PostsComponent({id}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (id) {
            apiService.getUserPosts(id)
                .then(value => setPosts([...value]))
        } else {
            apiService.getAllData('posts')
                .then(value => setPosts([...value]))
        }
    }, [id])

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} item={post}/>)}
        </div>
    )
}
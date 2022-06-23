import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts(){
   let [posts, setPosts] = useState([])
   let [post, setPost] = useState({})

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {setPosts(value);})

    }, [])

    const choosePosts = ((obj)=> {
        setPost(obj)
    })

    return (
        <div>
            {post && <div>{post.userId} {post.body}</div>}
            <h2>posts intepritator</h2>
            {posts.map((post,index) => <Post
                key={index}
                item={post}
                color={'silver'}
                choosePosts={choosePosts}
            />)}
        </div>
    )
}
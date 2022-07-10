import {useEffect, useState} from "react";

export default function Post({postId}){

    const [post, setPost] = useState({});

    useEffect(()=> {
        if (postId){
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(value => value.json()).then(value => setPost({...value}))
    }}, [postId])

    return (
        <div>
            {post.id}-{post.body}
        </div>
    )
}
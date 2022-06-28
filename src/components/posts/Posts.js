import {useEffect, useState} from "react";
import './Posts.css'
import {getPosts} from "../../services/all.api.service";
import Post from "../post/Post";

export default function Posts(){

    let [posts, setPosts] = useState([]);

    useEffect(()=> {

        getPosts().then(value => setPosts([...value]))

    }, [])


    return (
        <div className={'posts'}>
            {posts.map(value => <Post item={value} key={value.id}/>)}
        </div>
    )
}
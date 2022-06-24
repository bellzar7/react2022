import './Posts.css'
import {useEffect, useState} from "react";

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(posts => setPosts(posts))
        , [])

    return (
        <div>

        </div>
    )
}
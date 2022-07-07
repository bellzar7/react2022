import {useEffect, useState} from "react";
import ApiService from "../services/api.service";
import {useParams} from "react-router-dom";

export default function PostDetails() {

    const [post, setPost] = useState({});

    const apiService = new ApiService('posts');

    let {id} = useParams();

    useEffect(() => {
        apiService.getSingleData(id).then(value => setPost(value))
    }, [id])

    return (
        <div>
            {post.id}- <b>{post.body}</b>
        </div>
    )
}

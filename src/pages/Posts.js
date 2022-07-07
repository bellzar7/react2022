import {useEffect, useState} from "react";
import ApiService from "../services/api.service";
import PostComponent from "../components/PostComponent";
import {Outlet} from "react-router-dom";

export default function Posts(){

    const apiService = new ApiService('posts');

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        apiService.getAllData().then(value=> setPosts([...value]))
    },[])

    return (
        <div>

            <Outlet/>
            {posts.map(post=> <PostComponent key={post.id} item={post}/> )}


        </div>
    )
}
import PostsComponent from "../components/PostsComponent";
import {Outlet, useParams} from "react-router-dom";

export default function PostsPage() {

    const {id} = useParams();

    return (
        <div>
            <Outlet/>
            <PostsComponent id={id}/>

        </div>
    )
}
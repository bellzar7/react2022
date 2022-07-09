import {useLocation} from "react-router-dom";
import PostDetailsComponent from "../components/PostDetailsComponent";

export default function PostDetailsPage(){

const {state} = useLocation();

    return (
        <div>
            <PostDetailsComponent state={state}/>
        </div>
    )
}
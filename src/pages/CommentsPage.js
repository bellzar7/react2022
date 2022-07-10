import Comments from "../components/Comments";
import {Outlet} from 'react-router-dom'

export default function CommentsPage(){
    return (
        <div>
            <Outlet/>
            <Comments/>
        </div>
    )
}
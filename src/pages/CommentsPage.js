import CommentsComponent from "../components/CommentsComponent";
import {Outlet} from "react-router-dom";

export default function CommentsPage() {

    return (
        <div>
            <Outlet/>
            <CommentsComponent/>
        </div>
    )
}
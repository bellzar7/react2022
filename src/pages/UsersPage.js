import UsersComponent from "../components/UsersComponent";
import {Outlet} from "react-router-dom";

export default function UsersPage() {
    return (
        <div>
            <UsersComponent/>
            <hr/>
            <Outlet/>
        </div>
    )
}
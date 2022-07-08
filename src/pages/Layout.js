import {Link, Outlet} from "react-router-dom";


export default function Layout(){
    return (
        <div>
            <ul>
                <li><Link to={'users'}>Users page</Link></li>
                <li><Link to={'posts'}>Posts page</Link></li>
            </ul>


            <Outlet/>
        </div>
    )
}
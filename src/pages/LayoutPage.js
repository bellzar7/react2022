import {Link, Outlet} from "react-router-dom";

export default function LayoutPage() {


    return (
        <div>

            <div>
                <ol>
                    <li><Link to={'users'}>users</Link></li>
                    <li><Link to={'posts'}>posts</Link></li>
                    <li><Link to={'comments'}>comments</Link></li>
                </ol>
            </div>

            <Outlet/>

        </div>
    )
}
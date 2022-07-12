import {NavLink} from "react-router-dom";


export default function Header(){
    return (
        <div>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
        </div>
    )
}
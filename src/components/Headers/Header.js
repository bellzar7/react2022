import {NavLink} from "react-router-dom";
import css from './Header.module.css';

export default function Header(){
    return (
        <div className={css.header}>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
        </div>
    )
}
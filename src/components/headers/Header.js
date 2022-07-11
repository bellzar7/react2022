import {Link} from "react-router-dom";

export default function Header(){
    return (
        <div>
            <h2>menu</h2>
            <ol>
                <li><Link to={'todos'}>todos</Link></li>
                <li><Link to={'albums'}>albums</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
            </ol>
        </div>
    )
}
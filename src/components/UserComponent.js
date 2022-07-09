import {Link} from "react-router-dom";

export default function UserComponent({item}){

    let {id, name} = item

    return (
        <div>
            {id}-{name} - <span><Link to={id.toString()}>user posts</Link></span>
        </div>
    )
}
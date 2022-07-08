import {Link} from "react-router-dom";

export default function UserComponent({item}){


    return (
        <div>
            {item.id}-{item.name} - <Link to={item.id.toString()} state={{item}}>User Details</Link>
        </div>
    )
}
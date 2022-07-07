import {Link} from "react-router-dom";

export default function UserComponent({item}){

    const {id, name} = item;

    return (
        <div>
            {id} - {name} <Link to={id.toString()} state={{...item}}>Details</Link>
        </div>
    )
}
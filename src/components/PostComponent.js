import {Link} from "react-router-dom";

export default function PostComponent({item}){


    return (
        <div>
            {item.id} <span><Link to={'details'} state={{...item}}>Details</Link></span>
        </div>
    )
}
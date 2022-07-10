import {Link} from "react-router-dom";

export default function CommentComponent({item}) {

    return (
        <div>
            {item.id} - <span><Link to={'details'} state={{...item}}>Comment details</Link></span>
        </div>
    )
}
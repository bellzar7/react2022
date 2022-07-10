import {Link} from "react-router-dom";

export default function Comment({item}){


    return (
        <div>
            {item.id}
            {item.name}
            {item.email}
            {item.body}
           <Link to={item.postId.toString()}>Post current comment</Link>
            <hr/>
        </div>
    )
}
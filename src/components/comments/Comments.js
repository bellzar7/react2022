import {useEffect, useState} from "react";
import Comment from "./Comment";
import {getComments} from "../../services/api.service";

export default function Comments(){

    const [comments, setComments] = useState([]);

    useEffect(()=> {
       getComments().then(value => setComments([...value]))
    },[])

    return (
        <div>
            {comments.map(value => <Comment key={value.id} item={value}/>)}
        </div>
    )
}
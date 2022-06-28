import {useEffect, useState} from "react";
import {getComments} from "../../services/all.api.service";
import Comment from "../comment/Comment";
import './Comments.css'

export default function Comments() {

    let [comments, setComments] = useState([])

    useEffect(()=> {

        getComments().then(value => setComments([...value]))

    }, [])

    return (
        <div className={'comments'}>
            {comments.map(value => <Comment
            key={value.id}
            item={value}
            />)}
        </div>
    )
}
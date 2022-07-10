import {useEffect, useState} from "react";
import {apiService} from "../services/api.services";
import CommentComponent from "./CommentComponent";

export default function CommentsComponent() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        apiService.getAllData('comments').then(value => setComments([...value]))
    }, [])

    return (
        <div>
            {comments.map(value => <CommentComponent key={value.id} item={value}/>)}
        </div>
    )
}
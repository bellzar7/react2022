import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {load_users} from "../redux/action/users.action";

export default function HomePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                dispatch(load_users(value))
            });

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                dispatch({type: 'LOAD_POSTS', payload: value})
            })

    }, [])


    return (
        <div>
            Load in progress
        </div>
    )
}
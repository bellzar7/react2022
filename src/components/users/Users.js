import {useEffect, useState} from "react";

import {getUsers} from "../services/users.api.services";
import {User} from "../index";




export default function Users({getPostsId}) {

    let [users, setUsers] = useState([])

    useEffect(() => {

        getUsers().then(({data}) => setUsers([...data]))

    }, [])

    return (
        <div>
            {users.map(value => <User key={value.id} item={value} getPostsId={getPostsId}/>)}
        </div>
    )
}
import {useEffect, useState} from "react";

import {User, getUsers} from "../index";

export default function Users({getUserId}) {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(users => setUsers([...users]))

    }, []);

    return (
        <div>
            {users.map(user=> <User getUserId={getUserId} key={user.id} user={user}/>)}
        </div>
    )
}
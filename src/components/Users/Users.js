import {useEffect, useState} from "react";

import {userService} from "../../services";
import User from "../User/User";

export default function Users() {

    const [users, setUsers] = useState([]);

    const userIdState = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} userIdState={userIdState}/>)}
        </div>
    )
}
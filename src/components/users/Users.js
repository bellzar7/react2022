import {useEffect, useState} from "react";

import {getUsers} from "../../services/api.users.services";
import User from "../user/User";
import './Users.css'

export default function Users({getUserId}) {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]))
    }, [])

    return (
        <div className={'users'}>
            {users.map(user => <User key={user.id} user={user} getUserId={getUserId}/> )}
        </div>
    )
}
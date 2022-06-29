import {useEffect, useState} from "react";

import {getUsers} from "../services/users.api.services";




export default function Users() {

    let [users, setUsers] = useState([])

    useEffect(() => {

        getUsers().then(({data}) => setUsers([...data]))

    }, [])

    return (
        <div>
            {users.map()}
        </div>
    )
}
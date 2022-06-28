import './Users.css'
import {useEffect, useState} from "react";
import {getUsers} from "../../services/all.api.service";
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([])

    useEffect(() => {

        getUsers().then(value => setUsers([...value]))

    }, [])

    return (
        <div className={'users'}>
                {users.map((value) => <User item={value} key={value.id}/>)}
        </div>
    )
}
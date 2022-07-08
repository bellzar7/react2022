import {useEffect, useState} from "react";
import apiService from "../services/api.service";
import UserComponent from "../components/UserComponent";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        apiService.getAllUsers().then(value => setUsers([...value]))
    }, [])

    return (
        <div>
            {users.map(user=> <UserComponent key={user.id} item={user}/>)}
        </div>
    )
}
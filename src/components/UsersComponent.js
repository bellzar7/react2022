import {useEffect, useState} from "react";
import {apiService} from "../services/api.services";
import UserComponent from "./UserComponent";

export default function UsersComponent(){

    const [users, setUsers] = useState([]);



    useEffect(()=> {
        apiService.getAllData('users').then(value=> setUsers([...value]))
    }, [])

    return (
        <div>
            {users.map(user=> <UserComponent key={user.id} item={user}/>)}
        </div>
    )
}

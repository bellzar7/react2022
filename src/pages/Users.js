import {useEffect, useState} from "react";
import apiService from "../services/api.service";
import UserComponent from "../components/UserComponent";
import {Outlet} from "react-router-dom";

export default function Users() {

    let [users, setUsers] = useState([]);
const apiService1 = new apiService();

    useEffect(() => {
        apiService1.getAllUsers().then(value => setUsers([...value]))
    }, [])

    return (
        <div>
            <Outlet/>
            {users.map(user=> <UserComponent key={user.id} item={user}/>)}
        </div>
    )
}
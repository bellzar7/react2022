import ApiService from "../services/api.service";
import {useEffect, useState} from "react";
import UserComponent from "../components/UserComponent";
import {Outlet} from "react-router-dom";

export default function Users(){

    const apiService = new ApiService('users');

    const [users, setUsers] = useState([]);

    useEffect(()=> {
        apiService.getAllData().then(value=> setUsers([...value]))
    }, [])

    return (
        <div>
            {users.map(user=> <UserComponent key={user.id} item={user}/> )}

            <hr/>
            <div>
                <h3>Details about user</h3>

                <Outlet/>
            </div>
        </div>
    )
}
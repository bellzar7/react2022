import {useEffect, useState} from "react";
import {userService} from "../../services";
import {User} from "../../components";
import {Outlet} from "react-router-dom";

export default function UsersPage(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data})=> setUsers([...data]))
    }, [])

    return (
        <div>
            <Outlet/>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    )
}
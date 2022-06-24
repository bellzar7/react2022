import './Users.css'
import {useEffect, useState} from "react";
import User from "../user/User";
import UserDetails from "../userDetails/UserDetails";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
                .then(value => {
                    setUsers(value)
                })
        }
        , [])

    const info = (item) => {
        setUser(item)
    };

    return (
        <div>

            <h2>all users</h2>
            {user && <div><UserDetails item={user}/></div>}
            {users.map((user, index) =>
                <User
                    key={index}
                    item={user}
                    info={info}
                />
            )}
        </div>
    )
}
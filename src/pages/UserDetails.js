import {useLocation} from "react-router-dom";

export default function UserDetails(){

    const location = useLocation();
    const {state: user} = location;

    return (
        <div>
            <h4>{JSON.stringify(user.id)}</h4>
            <h4>{JSON.stringify(user.username)}</h4>
            <h4>{JSON.stringify(user.name)}</h4>
            <h4>{JSON.stringify(user.address.street)}</h4>
        </div>
    )
}
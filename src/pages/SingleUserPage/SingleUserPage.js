import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../../services";
import {UserDetails} from "../../components";

export default function SingleUserPage() {

    const [user, setUser] = useState(null);

    const {id} = useParams();

    const {state} = useLocation();

    useEffect(() => {
        if (!state) {
            userService.getById(id).then(({data})=> setUser(data))
        }else {
            setUser(state)
        }
    }, [id, state])

    return (
        <div>
            {user && <UserDetails user={user}/>}
        </div>
    )
}
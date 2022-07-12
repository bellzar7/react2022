import {Link, useNavigate} from "react-router-dom";
import Button from "../Button/Button";

export default function User({user}) {

    const navigate = useNavigate();

    const {id, name, username} = user;

    return (
        <div>
            <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>username: {username}</div>
            </div>
            {/*<button onClick={() => navigate(`${id}`, {state: user, replace: true})}>User Details</button>*/}
            {/*<Link to={`${id}`} state={user} replace={true}>*/}
            {/*    <button>User Details</button>*/}
            {/*</Link>*/}
            <Button to={id.toString()} state={user}>User Details</Button>

        </div>
    )
}
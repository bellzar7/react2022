import {Link} from "react-router-dom";

export default function Button({to, state, children, ...arg}) {

    return (
        <Link to={to} state={state} {...arg}>
            <button>{children}</button>
        </Link>
    )
}
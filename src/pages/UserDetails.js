import {useLocation} from "react-router-dom";

export default function UserDetails(){

    const {state} = useLocation();


    return (
        <div>
            {JSON.stringify(state)}
        </div>
    )
}
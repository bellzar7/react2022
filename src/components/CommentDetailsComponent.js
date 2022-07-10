import {useLocation} from "react-router-dom";

export default function CommentDetailsComponent() {


    const {state} = useLocation();

    return (
        <div>
            {state.id}-{state.body}
        </div>
    )
}
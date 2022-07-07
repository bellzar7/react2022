import {useNavigate} from "react-router";

export default function PostComponent({item}) {

    const {title, id} = item;

    const navigateFunction = useNavigate();

    return (
        <div>
            {id} {title}
            <button onClick={() => navigateFunction(id.toString())}>Click me to get details</button>
        </div>
    )
}
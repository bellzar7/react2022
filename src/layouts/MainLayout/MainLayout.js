import {Outlet, useNavigate} from 'react-router-dom';
import {Header} from "../../components";


export default function MainLayout(){
    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            <hr/>
            <button onClick={()=> navigate(-1)}>Prev</button>
            <button onClick={()=> navigate(1)}>Next</button>
            <Outlet/>
        </div>
    )
}
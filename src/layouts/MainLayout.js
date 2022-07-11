import Header from "../components/headers/Header";

import {Outlet} from "react-router-dom";

export default function MainLayout(){
    return (
        <div>
            <Header/>
            <h2>content</h2>
            <Outlet/>
        </div>
    )
}
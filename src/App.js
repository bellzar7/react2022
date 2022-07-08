import './App.css';
import Layout from "./pages/Layout";
import {useRoutes} from "react-router";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import UserDetails from "./pages/UserDetails";


function App() {

    let routes = [
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    element: <Users/>,
                    path: 'users',
                    children: [
                        {
                            element: <UserDetails/>,
                            path: ':id'
                        }
                    ]
                },
                {
                    element: <Posts/>,
                    path: 'posts'
                }
            ]
        }
    ]

    const element = useRoutes(routes)

    return (
        <div>
            {element}
        </div>
    );
}

export default App;

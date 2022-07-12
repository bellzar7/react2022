import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {NotFoundPage, PostsPage, SingleUserPage, UsersPage} from "./pages";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'users'}/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUserPage/>}/>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>


        </div>
    );
}

export default App;

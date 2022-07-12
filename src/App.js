import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {NotFoundPage, PostsPage, UsersPage} from "./pages";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>


        </div>
    );
}

export default App;

import './App.css';
import {Link, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/LayoutPage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import CommentPage from "./pages/CommentPage";


function App() {


    return (
        <div>

            <div>
                <h2>Menu</h2>
                <ul>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/layout'}>layout</Link></li>
                    <li><Link to={'/about'}>about</Link></li>
                </ul>
            </div>

            <div>
                <h2>content</h2>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/layout'} element={<LayoutPage/>}>
                        <Route path={'users'} element={<UsersPage/>}>
                            <Route path={':id'} element={<PostsPage/>}>
                                <Route path={'details'} element={<PostDetailsPage/>}/>
                            </Route>
                        </Route>
                        <Route path={'posts'} element={<PostsPage/>}>
                            <Route path={'details'} element={<PostDetailsPage/>}/>
                        </Route>
                        <Route path={'comments'} element={<CommentsPage/>}>
                            <Route path={'details'} element={<CommentPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </div>


        </div>
    );
}

export default App;

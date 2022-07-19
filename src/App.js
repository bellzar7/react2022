import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import UsersComponents from "./components/UsersComponents";
import PostsComponents from "./components/PostsComponents";


function App() {

    let state = useSelector(state => state)
    let dispatch = useDispatch();

    return (
        <div>
<ul>
    <li><Link to={'/'}>state home</Link></li>
    <li><Link to={'/users'}>users</Link></li>
    <li><Link to={'posts'}>posts</Link></li>
</ul>

            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/users'} element={<UsersComponents/>}/>
                <Route path={'/posts'} element={<PostsComponents/>}/>
            </Routes>



        </div>
    );
}

export default App;

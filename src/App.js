import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

/*
з jsonplaceholder відрендерити  інформацію про users,posts, comments
зліва всі юзери, зправа  всі пости
і знизу всі коментарі*/


function App() {
    return (
        <div >
            <div className={'all'}><Users/>
                <Posts/>
            </div>
            <Comments/>
        </div>
    );
}

export default App;

import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import ToDosPage from "./pages/ToDosPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import PostPage from "./pages/PostPage";

/*реалізувати 3 маршрути
todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos

    albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums

    comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
    при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
    id поста взяти з коментаря (postId)

відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.*/

function App() {
  return (
    <div >

      <h2>menu</h2>
      <ol>
          <li><Link to={'/todos'}>todos</Link></li>
          <li><Link to={'/albums'}>albums</Link></li>
          <li><Link to={'/comments'}>comments</Link></li>
      </ol>


        <Routes>
            <Route path={'/todos'} element={<ToDosPage/>}/>
            <Route path={'/albums'} element={<AlbumsPage/>}/>
            <Route path={'/comments'} element={<CommentsPage/>}>
                <Route path={':postId'} element={<PostPage/>}/>
            </Route>

        </Routes>


    </div>
  );
}

export default App;

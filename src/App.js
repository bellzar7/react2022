import './App.css';
import {getPosts, getUser, Posts, UserDetails, Users} from "./components";

import {useState} from "react";


/*Вивести всіх юзерів, біля кожного юзера кнопка GetDetails.
    При натисканні на кнопку праворуч повинна з’явитися повністю вся інформація про юзера і кнопка при натисканні на яку
     знизу повинні з’явитися його пости
Структура схематично зображена в картинці поруч з цим файлом*/


function App() {

    let [user, setUser] = useState(null);
    let [posts, setPosts] = useState([]);

    const getUserId = (id) => {
        getUser(id).then(value => setUser({...value}));
    };

    const getUserIdForPosts = (id) => { getPosts(id).then(value => setPosts([...value]))}

    return (
        <div>
          <div className={'box'}>
              <div className={'left'}><Users getUserId={getUserId}/></div>
              <div className={'right'}>{
                  user && <UserDetails getUserId={getUserIdForPosts} user={user}/>
              }</div>
          </div>
            {
                posts && <Posts posts={posts}/>
            }
        </div>
    );
}

export default App;

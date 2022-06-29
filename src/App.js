import './App.css';

import {useState} from "react";

import UserDetails from "./components/userDetails/UserDetails";
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import {getUser, getUserPosts} from "./components";

/*Вивести всіх юзерів, біля кожного юзера кнопка GetDetails.
    При натисканні на кнопку праворуч повинна з’явитися повністю вся інформація про юзера і кнопка при натисканні на яку
     знизу повинні з’явитися його пости
Структура схематично зображена в картинці поруч з цим файлом*/

function App() {

    let [userDetails, setUserDetails] = useState(null)
    let [userPosts, setUserPosts] = useState([])

    let getUserId = (id) => {getUser(id).then(({data}) => setUserDetails({...data}))}
    let getUserIdForPosts = (id) => {  getUserPosts(id).then(({data})=> setUserPosts([...data]) )}


    return (
        <div>
            <div className={'first'}>
                <div className={'left'}><Users getUserId={getUserId}/></div>
                {
                    userDetails && <div className={'right'}> <UserDetails user={userDetails} getUserIdForPosts={getUserIdForPosts}/> </div>
                }
            </div>
            {userPosts && <div> <Posts posts={userPosts}/> </div>}

        </div>
    );
}

export default App;

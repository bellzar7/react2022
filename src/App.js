import './App.css';

import {getPosts, Users} from "./components";

import {useEffect, useState} from "react";
import Posts from "./components/posts/Posts";


/*Отримати всіх користувачів з jsonplaceholder, вивести їх.
    Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
Запити робити через axios, організація коду через сервіси*/

function App() {

    let [posts, setPost] = useState([]);

    const getPostsId = (id) => {
        getPosts(id).then(value => setPost([...value]))
    }

    useEffect(() => {


    }, [])

    return (
        <div>
            <h2>users posts</h2>
            <Posts posts={posts}/>
            <hr/>
            <br/>
            <Users getPostsId={getPostsId}/>
        </div>
    );
}

export default App;

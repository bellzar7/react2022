import {useEffect, useState} from "react";
import ToDoComponent from "./ToDoComponent";

export default function ToDosComponent(){

    let [todos, setTodos] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos').then(value => value.json()).then(value => setTodos([...value]))
    }, [])


    return (
        <div>
            {todos.map(value => <ToDoComponent key={value.id} item={value}/>)}
        </div>
    )
}
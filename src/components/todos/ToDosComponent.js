import {useEffect, useState} from "react";
import ToDoComponent from "./ToDoComponent";
import {getTodos} from "../../services/api.service";

export default function ToDosComponent(){

    let [todos, setTodos] = useState([]);

    useEffect(()=> {
        getTodos().then(value => setTodos([...value]))
    }, [])


    return (
        <div>
            {todos.map(value => <ToDoComponent key={value.id} item={value}/>)}
        </div>
    )
}
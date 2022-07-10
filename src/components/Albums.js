import {useEffect, useState} from "react";
import Album from "./Album";

export default function Albums(){

    let [albums, setAlbums] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/albums').then(value => value.json()).then(value => setAlbums([...value]))
    }, [])


    return (
        <div>
            {albums.map(value => <Album key={value.id} item={value}/>)}
        </div>
    )
}
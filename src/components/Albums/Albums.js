import {useEffect, useState} from "react";

import Album from "./Album";
import {getAlbums} from "../../services/api.service";

export default function Albums(){

    let [albums, setAlbums] = useState([]);

    useEffect(()=> {
        getAlbums().then(value => setAlbums([...value]))
    }, [])


    return (
        <div>
            {albums.map(value => <Album key={value.id} item={value}/>)}
        </div>
    )
}
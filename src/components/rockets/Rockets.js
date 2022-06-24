import {useEffect, useState} from "react";
import Rocket from "../rocket/Rocket";

export default function Rockets() {

    let [rockets, setRockets] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setRockets(value.filter(value=> value.launch_year!=='2020')))
    }, [])


    return (

        <div>
            {rockets.map((rocket,index) =>
                <Rocket
                    key={index}
                item={rocket}
                />
            )}
        </div>
    )
}
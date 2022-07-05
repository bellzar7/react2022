import {useEffect, useState} from "react";

import {Car, Form} from "../index";

export default function Cars(){


    const [cars, setCars] = useState([]);

    useEffect(()=> {

    },[])

    return (
        <div>
            <Form/>
            <hr/>
            <Car/>
        </div>
    )
}
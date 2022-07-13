import {useEffect} from "react";

export default function Some(){
    useEffect(()=> {
        console.log('mount some');

        return ()=> {
            console.log('unmount some');
        }

    },[]);
    return (
        <div>
            some
        </div>
    )
}
import React from 'react';
import {useSelector} from "react-redux";


const ShowCounts = () => {

    let {count1Reducer: {count1, users, isLoading, serverError}, count2Reducer: {count2}} = useSelector(state => state);

    return (
        <div>
            <h1>Count 1 : {count1}</h1>
            <br/>
            <h1>Count2 : {count2}</h1>
            <hr/>
            {isLoading && <h1>Loading...</h1>}
            {serverError && <h1>{serverError}</h1>}
            {JSON.stringify(users)}
        </div>
    );
};

export {ShowCounts};
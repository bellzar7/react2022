import React from 'react';

import css from './car.module.css'
import {useDispatch} from "react-redux";
import {carActions} from "../../redux/slices";

const Car = ({car}) => {

    const {id, model, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div className={css.Car}>
            <div>id : {id}</div>
            <div>model : {model}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={() => dispatch(carActions.del({id}))}>delete</button>
        </div>
    );
};

export {Car};
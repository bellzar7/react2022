import React, {useReducer} from 'react';
import css from './car.module.css'
import {carActions} from "../../redux";
import {useDispatch} from "react-redux";

const Car = ({car}) => {

    const {id, model, price, year} = car

    const dispatch = useDispatch();

    return (
        <div className={css.Car}>
            <div>id : {id}</div>
            <div>model : {model}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>UpdateCar</button>
        </div>
    );
};

export {Car};
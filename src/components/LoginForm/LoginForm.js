import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authAction} from "../../redux";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {

    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const submit = async (data) => {
        const {error} = await dispatch(authAction.login({user: data}));
        if (!error) {
            navigate('/cars')
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Login</button>
        </form>
    );
};

export {LoginForm};
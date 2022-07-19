// {type: 'LOAD_USERS', payload: value}

import {LOAD_USERS} from "../actionTypes/action.types";

export const load_users = (payload)=> {
    return {type: LOAD_USERS, payload: payload}
}
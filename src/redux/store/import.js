import {createStore} from "redux";
import {reducers} from "../reducers/combiner";

export let store = createStore(reducers)
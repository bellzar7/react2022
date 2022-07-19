import './App.css';
import {useDispatch, useSelector} from "react-redux";


function App() {

    let state = useSelector(state => state)
    let dispatch = useDispatch();

    return (
        <div>
            {state}
            <button onClick={()=> {
                dispatch({type: 'INC', payload: 1})
            }}>INCrement</button>

            <button onClick={() => {
                dispatch({type: 'DEC', payload: 1})
            }}>DECrement
            </button>

            <button onClick={() => {
                dispatch({type: 'RES'})
            }}>RESet
            </button>
        </div>
    );
}

export default App;

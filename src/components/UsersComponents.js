import {useDispatch, useSelector} from "react-redux";

export default function UsersComponents() {

    const {users, user} = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            {user?.email}

            {users.map(value => <div key={value.id}>{value.name}
                <button onClick={()=> {
                    dispatch({type:'GET_USER', payload: {data: users, id:value.id}})
                }}>details of user</button>
            </div>)}
        </div>
    )
}
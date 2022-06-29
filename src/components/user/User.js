export default function User({user,getUserId}){

    return (
        <div>
           <b>{user.id}</b>- {user.name}
            <button onClick={()=> {getUserId(user.id)}}>GetDetails</button>
        </div>
    )
}
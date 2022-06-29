export default function User({user, getUserId}){

    return (
        <div>
         <b>{user.id}</b> - {user.name} <b>City:</b> {user.address.city}
            <button onClick={()=> getUserId(user.id)}>GetDetails</button>
        </div>
    )
}
export default function UserDetails({user, getUserId}) {

    return (
        <div>
            <div>
                <h3>{user.id}</h3>
                <h3>{user.name}</h3>
                <h3>{user.username}</h3>
                <h3>{user.email}</h3>
                <h3>{user.address.street}</h3>
                <h3>{user.address.suite}</h3>
                <h3>{user.address.city}</h3>
                <h3>{user.address.zipcode}</h3>
                <h3>{user.address.geo.lat}</h3>
                <h3>{user.address.geo.lng}</h3>
                <h3>{user.phone}</h3>
                <h3>{user.website}</h3>
                <h3>{user.company.name}</h3>
                <h3>{user.company.catchPhrase}</h3>
                <h3>{user.company.bs}</h3>
            </div>
            <button onClick={() => getUserId(user.id)}>user posts</button>
        </div>
    )
}
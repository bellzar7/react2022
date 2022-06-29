import './UserDetails.css'


export default function UserDetails({user, getUserIdForPosts}){


    return (
        <div className={'block'}> <div className={'details'}> <h2>User Details</h2>
            <p>{user.id}</p>
            <p>{user.name}</p>
           <p>{user.email}</p>
           <p>{user.address.street}</p>
           <p>{user.address.suite}</p>
           <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
           <p>{user.address.geo.lat}</p>
            <p>{user.address.geo.lng}</p>
           <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.company.name}</p>
           <p>{user.company.catchPhrase}</p>
           <p>{user.company.bs}</p>
        </div>
            <button onClick={()=> getUserIdForPosts(user.id)}>Get Posts</button>

        </div>
    )
}
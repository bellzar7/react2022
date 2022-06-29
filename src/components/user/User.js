export default function User({item, getPostsId}){



    return (
        <div>
            {item.id} - {item.name} - {item.address.city}
            <button onClick={()=> getPostsId(item.id)}>User Posts</button>
        </div>
    )
}
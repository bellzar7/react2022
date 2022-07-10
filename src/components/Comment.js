export default function Comment({item}){


    return (
        <div>
            {item.id}
            {item.name}
            {item.email}
            {item.body}
            <button>Post current comment</button>
            <hr/>
        </div>
    )
}
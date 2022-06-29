export default function Post({item}){
    return (
        <div>
            <b>User id</b>-{item.userId} <b>Post id</b> - {item.id} - {item.body}
        </div>
    )
}
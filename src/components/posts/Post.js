export default function Post({item}){
    return (
        <div>
           <h2> {item.id}-{item.body}</h2>
        </div>
    )
}
export default function Post({item, color, choosePosts}){
    return (
        <div style={{background: color, marginBottom:'3px'}}>
            {item.id} {item.title}
            <button onClick={()=> {
                choosePosts(item)
            } }>details</button>
        </div>
    )
}
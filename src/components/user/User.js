export default function User({item,info}){
    return (
        <div>
            {item.id}{item.name}
            <button onClick={()=>{info(item)}}>show details about this user</button>
        </div>
    )
}
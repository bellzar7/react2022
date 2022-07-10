export default function Album({item}){
    return (
        <div>
            {item.id}-{item.userId}-{item.title}
        </div>
    )
}
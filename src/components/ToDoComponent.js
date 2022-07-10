export default function ToDoComponent({item}){

    return (
        <div>
            {item.id}-{item.userId}-{item.title}-{item.completed.toString()}
        </div>
    )
}
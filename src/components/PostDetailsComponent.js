export default function PostDetailsComponent({state}){
    return (
        <div>
            {state.id}-{state.body}
        </div>
    )
}
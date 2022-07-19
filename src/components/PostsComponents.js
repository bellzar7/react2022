import {useSelector} from "react-redux";

export default function PostsComponents(){

    const posts = useSelector(({posts})=> posts)

    return (
        <div>
            {posts.map(value=> <div key={value.id}>{value.title}</div>)}
        </div>
    )
}
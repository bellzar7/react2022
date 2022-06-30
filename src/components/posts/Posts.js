import {Post} from "../index";

export default function Posts({posts}){



    return (
        <div>
            {posts.map(value=> <Post key={value.id} post={value}/>)}
        </div>
    )
}
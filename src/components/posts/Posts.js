export default function Posts({posts}){
    return (
        <div>
            {posts.map(post => <div key={post.id}> <b>{post.id} -</b> {post.body}</div>)}
        </div>
    )
}
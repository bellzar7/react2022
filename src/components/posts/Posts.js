export default function Posts({posts}) {
    return (
        <div>
            {posts.map(post => <div key={post.id}><b>User id</b> - {post.userId} <b>Post id</b> - {post.id} - {post.body}</div>)}
        </div>
    )
}
export default function Post({post}){
    return (
        <div>
          <b>User-{post.userId}</b> : <b>{post.id}</b>-{post.body}
        </div>
    )
}
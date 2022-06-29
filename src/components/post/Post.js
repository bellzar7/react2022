export default function Post({post}){
    return (
        <div>
            <b>{post.id} -</b> {post.body}
        </div>
    )
}
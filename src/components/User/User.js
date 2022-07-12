

export default function User({user, userIdState}) {
    const [userId, setUserId] = userIdState;

    const {id, name, username} = user;

    return (
        <div>
            <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>username: {username}</div>
            </div>
            <button onClick={() => setUserId(id)}>ShowPosts</button>

        </div>
    )
}
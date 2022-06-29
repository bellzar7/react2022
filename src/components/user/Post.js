export default function Post({item}){



    return (
        <div>
            {item.id} - {item.name} - {item.address.city}
        </div>
    )
}
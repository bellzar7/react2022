export default function UserDetails({item}){
    return (
        <div>
            {item.name}{item.address.city}{item.address.street}{item.address.geo.lng}
        </div>
    )
}
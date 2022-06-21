import './Character.css'
function Character(props) {
let {name, desc, picture} = props
    return (
        <div className={'divFromApp'}>
            <h2>{name}</h2>
            <p>{desc}</p>
            <img src={picture} alt=""/>
        </div>
    )
}
export default Character;

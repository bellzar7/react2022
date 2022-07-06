import './car.css'

export default function Car({car, deleteCarById, setCarForUpdate}) {
    const {id, price, year, model} = car;

    return (
        <div className={'box'}>
            <div className={'car'}>
                <p>id: {id}</p>
                <p>model: {model}</p>
                <p>price: {price}</p>
                <p>year: {year}</p>
            </div>
            <div className={'but'}>
                <button onClick={() => setCarForUpdate(car)}>Edit</button>
                <button onClick={() => deleteCarById(id)}>Delete</button>
            </div>
        </div>
    )
}
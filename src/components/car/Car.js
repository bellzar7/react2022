import './car.css';

export default function Car({car, deleteCar, setCarForUpdate}) {

    const {id, model, price, year} = car;

    return (
        <div className={'car'}>
            <div className={'container'}>
                <div>id: {id}</div>
                <div>model: {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <div className={'tools'}>
                <button onClick={()=> setCarForUpdate(car)}>Edit</button>
                <button onClick={() => deleteCar(id)}>Delete</button>
            </div>
        </div>
    )
}
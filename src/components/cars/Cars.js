import {useEffect, useState} from "react";

import {Car, Form} from "../index";
import {carService} from "../../services";

export default function Cars() {

    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars([...data]))
    }, []);

    const addCar = (car) => {
        setCars([...cars, car])
    };

    const deleteCarById = async (id) => {
        await carService.deleteById(id);
        const res = [...cars];
        const index = res.findIndex(value => value.id === id);

        if (index !== -1) {
            res.splice(index, 1);
            setCars(res);
        }
    };

    const updateCar = async (car) => {
        const res = [...cars];
        const carr = res.find(value => value.id === carForUpdate.id);

        if (carr) {
            Object.assign(carr, car);
            setCars(res);
            setCarForUpdate(null)
        }
    }

    return (
        <div>
            <Form addCar={addCar} carForUpdate={carForUpdate} updateCar={updateCar}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} deleteCarById={deleteCarById}
                                  setCarForUpdate={setCarForUpdate}/>)}
        </div>
    )
}
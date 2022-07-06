import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {carService} from "../../services";


export default function Form({addCar, carForUpdate, updateCar}) {

    const {register, handleSubmit, setValue, reset, formState: {errors}} = useForm({mode: "all"});

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])

    const submit = async (car) => {
        if (!carForUpdate) {
            const {data} = await carService.create(car);
            addCar(data);
        } else {
           await carService.updateById(carForUpdate.id, car).then(({data})=> updateCar(data));
        }
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model', {
                    required: 'true',
                    pattern: new RegExp(/^[a-zA-ZА-яіІїЇёЁ]{1,20}$/),
                })}/>
                <input type="text" placeholder={'price'} {...register('price', {
                    required: 'true',
                    valueAsNumber: 'true',
                    min: 0,
                    max: 1000000
                })}/>
                <input type="text" placeholder={'year'} {...register('year', {
                    required: 'true',
                    valueAsNumber: 'true',
                    min: 1990,
                    max: new Date().getFullYear()
                })}/>
                <button>{carForUpdate ? 'Edit' : 'Save'}</button>
            </form>
            <div>
                {errors.model && <span>Only Alpha min 1 max 20 ch</span>}
                {errors.price && <span>Min 0 Max 1 000 000</span>}
                {errors.year && <span>Min 1990 Max current year</span>}
            </div>
        </div>
    )
}
import {useForm} from "react-hook-form";

export default function Form(){

    const {register, handleSubmit, setValue, reset, formState:{errors}} = useForm({mode:"all"});

    const submit = ()=> {

    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model',{
                    required:'true',
                    pattern: new RegExp(/^[a-zA-ZА-яіІїЇёЁ]{1,20}$/),
                })}/>
                <input type="text" placeholder={'price'} {...register('price',{
                    required:'true',
                    valueAsNumber:'true',
                    min:0,
                    max:1000000
                })}/>
                <input type="text" placeholder={'year'} {...register('year',{
                    required:'true',
                    valueAsNumber:'true',
                    min:1990,
                    max: new Date().getFullYear()
                })}/>
            </form>
            <div>
            {errors.model && <span>Only Alpha min 1 max 20 ch</span>}
            {errors.price && <span>Min 0 Max 1 000 000</span>}
            {errors.year && <span>Min 1990 Max current year</span>}
            </div>
        </div>
    )
}
import {useForm} from "react-hook-form";

import {createUser} from "../../services";

export default function Users() {


    let {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: 'name',
            username: 'username',
            email: 'email',
            address: {street: 'street',
                city: 'city'}

        }
    })

    const submit = (obj) => {
createUser(obj).then(({data}) => console.log(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} {...register('name', {required: true})}/>
                {errors.name && <span>name is required</span>}
                <input type={'text'} {...register('username')}/>
                <input type={'text'} {...register('email', {required: true})}/>
                <input type={'text'} {...register('address.street')}/>
                <input type={'text'} {...register('address.city')}/>
                <input type={'submit'}/>
            </form>
        </div>
    )
}
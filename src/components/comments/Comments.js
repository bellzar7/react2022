import {useForm} from "react-hook-form";

import {createComment} from "../../services";

export default function Comments() {

    let {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: 'name',
            email: 'email',
            body: 'body'
        }
    })

    const submit = (obj) => createComment(obj).then(value => console.log(value))

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} {...register('name', {required: true})}/>
                {errors.name && <span>name is required</span>}
                <input type={'text'} {...register('email')}/>
                <input type={'text'} {...register('body')}/>
                <input type={'submit'}/>
            </form>
        </div>
    )
}
import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object({
    name: yup.string().required(),
    password: yup.string().required(),
}).required();

const LoginForm = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = data => console.log(data)

    // console.log(watch("name"))

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name</label><br/>
                <input {...register("name")} placeholder="Enter your Name" />
                {errors.name && <p>errors.name.message</p>}
            </div>
            
            <div>
                <label>Password</label><br/>
                <input {...register("password")} placeholder="Enter your Password" type="password" />
                {errors.password && <p>errors.password.message</p>}
            </div>
      
            <input type="submit" />
        </form>
    )
}

export default LoginForm

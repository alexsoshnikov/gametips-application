import {MainContainer} from "../../components/hoc/MainContainer";
import {PostForm} from "../../components/post/PostForm";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../context/auth/context";
import {FormInput} from "../../components/UI/FormInput";
import {Button} from "../../components/UI/Button";
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';

export default function Register() {
    const auth = useContext(AuthContext)
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(
            yup.object().shape({
                username: yup.string().required(),
                email: yup.string().required().email(),
                password: yup.string().required().min(8).max(32)
            })
        )
    })

    const onSubmitHandler = form => {
        auth.register(form.email, form.password)
    }

    return (
        <MainContainer title="Tipser | Sign Up">
            <PostForm title="Tipser | Sign Up">
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <FormInput type="text"
                               label="username"
                               placeholder="Username..."
                               register={register}
                               required
                    />
                    <p>{errors.username?.message}</p>

                    <FormInput type="email"
                               label="email"
                               placeholder="Email..."
                               register={register}
                               required
                    />
                    <p>{errors.email?.message}</p>

                    <FormInput type="password"
                               label="password"
                               placeholder="Password..."
                               register={register}
                               required
                    />
                    <p>{errors.password?.message}</p>

                    <Button type="submit">Sign up</Button>
                </form>
            </PostForm>
        </MainContainer>
    )
}

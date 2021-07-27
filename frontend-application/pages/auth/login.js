import classes from "../../styles/pages/login.module.scss";
import {MainContainer} from "../../components/hoc/MainContainer";
import {PostForm} from "../../components/post/PostForm";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../context/auth/context";
import {FormInput} from "../../components/UI/FormInput";
import {Button} from "../../components/UI/Button";
import Link from "next/link";
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';

//https://react-hook-form.com/get-started

export default function Login() {
    const auth = useContext(AuthContext)
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(
            yup.object().shape({
                email: yup.string().required().email(),
                password: yup.string().required()
            })
        )
    })

    const onSubmitHandler = form => {
        auth.login(form.email, form.password)
    }

    return (
        <MainContainer title="Tipser | Sign In">
            <PostForm title="Tipser | Sign In">
                <form onSubmit={handleSubmit(onSubmitHandler)}>
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

                    <Button type="submit">Sign in!</Button>
                    <p>
                        If you don't have account &nbsp;
                        <Link href={"/auth/register"}>
                            <a style={{color: "blue"}}>SIGN UP</a>
                        </Link>
                        &nbsp;
                        now!
                    </p>
                </form>
            </PostForm>
        </MainContainer>
    )
}

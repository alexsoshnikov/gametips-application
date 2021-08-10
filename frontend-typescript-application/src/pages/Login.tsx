import React, {useState} from "react";
import {Form, Button, Spinner} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {FormGroup} from "../components/form-group/FormGroup";
import {useDispatch, useSelector} from "react-redux";
import { bindActionCreators } from 'redux';
import {RootState} from "../states/reducers";
import {authActionCreator} from '../states'
import {SignCard} from "../components/posts/SignCard";
import {Redirect} from "react-router-dom";

export const Login: React.FC = () => {
    const state = useSelector((state: RootState) => state.auth)
    const { login } = bindActionCreators(authActionCreator, useDispatch())

    const [validated, setValidated] = useState<boolean>(false);
    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            const formData = new FormData(form)
            login(formData.get('email') as string, formData.get('password') as string)
            return
        }
        setValidated(true);
    }

    if (!state.isAuth && state.isLoading) {
        return (
            <SignCard>
                <Spinner animation="border"/>
            </SignCard>
        )
    }

    if (state.isAuth) {
        return <Redirect to="/"/>;
    }

    return (
        <SignCard title="Sign In">
            <Form noValidate validated={validated} onSubmit={onSubmitHandler}>
                <FormGroup
                    required={true}
                    label="Email address"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    feedback="Please enter correct email address"
                    controlId="formGroupEmail"
                    hasValidation={true}
                />
                <FormGroup
                    required={true}
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    feedback="Please enter password"
                    controlId="formGroupPassword"
                    hasValidation={true}
                />
                <Button type="submit">Sign In!</Button>
                <p className="mt-3">
                    If you don't have an account&nbsp;
                    <NavLink to="/auth/registration">Sign Up</NavLink>
                    &nbsp;now!
                </p>
            </Form>
        </SignCard>
    )
}
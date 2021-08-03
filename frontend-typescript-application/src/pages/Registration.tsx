import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import {FormGroup} from "../components/form-group/FormGroup";
import {SignCard} from "../components/posts/SignCard";


export const Registration: React.FC = () => {
    const [validated, setValidated] = useState<boolean>(false);

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            const formData = new FormData(form)

            console.log(formData.get('password'))
            return
        }
        setValidated(true);
    }

    return (
        <SignCard title="Sign Up">
            <Form noValidate validated={validated} onSubmit={onSubmitHandler}>
                <FormGroup
                    required={true}
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    feedback="Please enter username"
                    controlId="formGroupUsername"
                />
                <FormGroup
                    required={true}
                    label="Email address"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    feedback="Please enter correct email address"
                    controlId="formGroupEmail"
                />
                <FormGroup
                    required={true}
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    feedback="Please enter password"
                    controlId="formGroupPassword"
                />
                <Button type="submit">Sign Up!</Button>
            </Form>
        </SignCard>
    )
}
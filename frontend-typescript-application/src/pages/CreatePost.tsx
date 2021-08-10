import React, {useState} from "react";
import {Layout} from "../hoc/Layout";
import {Button, Card, Form} from "react-bootstrap";
import {FormGroup} from "../components/form-group/FormGroup";

export const CreatePost: React.FC = () => {
    const [validated, setValidated] = useState<boolean>(false);
    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity()) {
            const formData = new FormData(form)

            return
        }
        setValidated(true);
    }

    return (
        <Layout>
            <Card text="white" bg="dark">
                <Card.Body>
                    <Card.Title>Create post</Card.Title>
                    <Form noValidate validated={validated} onSubmit={onSubmitHandler}>
                        <FormGroup
                            required={true}
                            label="Title of Tip"
                            name="title"
                            type="text"
                            placeholder="Enter title"
                            feedback="This is required field"
                            controlId="formGroupTitle"
                            hasValidation={true}
                        />
                        <FormGroup
                            required={false}
                            label="Description"
                            name="description"
                            type="textarea"
                            placeholder="Enter description"
                            feedback="Description error"
                            controlId="formGroupDescription"
                            hasValidation={false}
                        />
                        <Button type="submit">Create new Tip!</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Layout>
    )
}
import React, {useState} from "react";
import {Container, Form, Card, Button, Row, Col,} from "react-bootstrap";
import {FormGroup} from "../components/form-group/FormGroup";


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
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <Card className="bg-dark text-white">
                        <Card.Body>
                            <Card.Title>Sign Up</Card.Title>
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
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
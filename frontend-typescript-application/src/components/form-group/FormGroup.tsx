import React from "react"
import {Form, InputGroup} from "react-bootstrap"
import {IFormGroup} from "../../models/components/IFormGroup";


export const FormGroup: React.FC<IFormGroup> = props => (
    <Form.Group className="mb-3" controlId={props.controlId}>
        <Form.Label>{props.label}</Form.Label>
        <InputGroup hasValidation>
            <Form.Control
                required={props.required}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
            />
            <Form.Control.Feedback type="invalid">
                {props.feedback}
            </Form.Control.Feedback>
        </InputGroup>
    </Form.Group>
)
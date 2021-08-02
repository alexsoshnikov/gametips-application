import React from "react"
import {IPost} from "../../models/IPost"
import {Button, Card} from "react-bootstrap"

export const MajorPost: React.FC<IPost> = props => (
    <Card>
        <Card.Header>{props.username}</Card.Header>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
        </Card.Body>
    </Card>
)
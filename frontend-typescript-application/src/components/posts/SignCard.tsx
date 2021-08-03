import React from "react";
import {ISignCard} from "../../models/components/ISignCard";
import {Card, Col, Container, Row} from "react-bootstrap";

export const SignCard: React.FC<ISignCard> = props => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <Card className="bg-dark text-white">
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            {props.children}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
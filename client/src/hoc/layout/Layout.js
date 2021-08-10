import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import classes from "./Layout.module.scss";
import {Aside} from "../../components/aside/Aside";

export const Layout = ({children}) => (
    <Container as={"main"} className={classes.layout}>
        <Row>
            <Col md={9}>
                {children}
            </Col>
            <Col md={3}>
                <Aside/>
            </Col>
        </Row>
    </Container>
)
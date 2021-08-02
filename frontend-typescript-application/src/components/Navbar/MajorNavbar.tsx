import React, {useContext} from "react"
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {IUser} from "../../models/IUser";


export const MajorNavbar: React.FC = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand>Tipser</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" exact>Feed</Nav.Link>
                        <Nav.Link as={NavLink} to="/feedback" exact>Feedback</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/auth/login">Sign in</Nav.Link>
                        <Nav.Link>{'Nothing'}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
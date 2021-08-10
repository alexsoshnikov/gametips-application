import React from "react"
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {IMajorNavbar} from "../../models/components/IMajorNavbar";

export const MajorNavbar: React.FC<IMajorNavbar> = props => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand>Tipser</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" exact>Feed</Nav.Link>
                        <Nav.Link as={NavLink} to="/post/create" exact>Create Tip</Nav.Link>
                        <Nav.Link as={NavLink} to="/feedback" exact>Feedback</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            props.isAuth && props.email
                                ? <Nav.Link as={NavLink} to={'/profile/' + props.id}>{props.email}</Nav.Link>
                                : <Nav.Link as={NavLink} to="/auth/login">Sign in</Nav.Link>
                        }
                        <Button variant="warning" onClick={props.onClickHandler}>Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
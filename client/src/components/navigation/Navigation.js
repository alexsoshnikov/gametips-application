import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import classes from "./Navigation.module.scss";
import {NavigationLink} from "./navigationLink/NavigationLink";
import {NavigationNotification} from "./navigationNotification/NavigationNotification";
import {LoginLink} from "./loginLink/LoginLink";

export const Navigation = () => {
    return (
        //todo: Сделать моб версию навбара. Подумать как лучше сделать кнопку Sign in

        <Navbar collapseOnSelect className={classes.navigation} expand="lg" fixed="top">
            <Container>
                <Navbar.Brand>Navbar</Navbar.Brand>
                <div className={classes.menu}>
                    <ul>
                        <NavigationLink title="Feed" to="/"/>
                        <NavigationLink title="Feedback" to="/feedback"/>
                    </ul>
                    <div>
                        {/*<NavigationNotification/>*/}
                        <LoginLink/>
                    </div>
                </div>
            </Container>
        </Navbar>
    )
}
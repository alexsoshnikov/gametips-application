import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./LoginLink.module.scss";


export const LoginLink = () => (
    <NavLink
        className={classes.loginLink}
        to="/auth/login"
        exact
    >
        <span>Sign In</span>
    </NavLink>
)

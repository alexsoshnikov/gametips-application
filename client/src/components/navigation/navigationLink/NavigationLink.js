import React from "react";
import classes from "./NavigationLink.module.scss";
import {NavLink} from "react-router-dom";

export const NavigationLink = props => (
    <li className={classes.navigationLink}>
        <NavLink
            to={props.to}
            activeClassName={classes.active}
            exact
        >
            {props.title}
        </NavLink>
    </li>
)
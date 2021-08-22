import React from "react";
import classes from "./Login.module.scss";
import {Input} from "../../../components/UI/Input/Input";
import {Button} from "../../../components/UI/button/Button";
import {NavLink} from "react-router-dom";

export const Login = () => {

    return (
        <div className={classes.login}>
            <h3>Tipser | Sign In</h3>
            <form>
                <Input
                    name="email"
                    type="email"
                    placeholder="Your email..."
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Super secret password..."
                />
                <div>
                    <Button type="submit" title="Sign In!"/>
                    <p>If you don't have an account&nbsp;
                        <NavLink
                            to="/auth/registration"
                        >
                            Sign Up
                        </NavLink>
                        &nbsp;
                        now!
                    </p>
                </div>
            </form>
        </div>
    )
}
import React from "react";
import classes from "./Login.module.scss";
import {Input} from "../../../components/UI/Input/Input";


export const Login = () => {
    return (
        <div className={classes.login}>
            <div>
                <h3>Sign In</h3>
                <form>
                    <Input
                        type="email"
                        placeholder="Enter email"
                    />
                </form>
            </div>
        </div>
    )
}
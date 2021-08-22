import React from "react";
import classes from "./Registration.module.scss";
import {Input} from "../../../components/UI/Input/Input";
import {Button} from "../../../components/UI/button/Button";


export const Registration = () => {
    const onSubmitHandler = event => {
        event.preventDefault()
    }


    return (
        <div className={classes.registration}>
            <h3>Tipser | Sign Up</h3>
            <form>
                <Input
                    type="text"
                    placeholder="Your cool username..."
                />
                <Input
                    type="email"
                    placeholder="Active email..."
                />
                <Input
                    type="email"
                    placeholder="Secret password..."
                />
                <Button type="submit" title="Sign Up!" onClick={onSubmitHandler}/>
            </form>
        </div>
    )
}
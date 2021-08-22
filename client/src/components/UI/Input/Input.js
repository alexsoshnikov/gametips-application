import React from "react";
import classes from "./Input.module.scss";

export const Input = props => {
    const cls = [classes.input]

    return (
        <div className={cls.join(' ')}>
            <input
                name={props.name}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </div>
    )
}
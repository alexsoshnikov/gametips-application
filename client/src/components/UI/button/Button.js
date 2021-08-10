import React from "react";
import classes from "*.module.css";

export const Button = props => {
    const cls = [classes.button, classes[props.type]]

    return (
        <button
            className={cls.join(' ')}
            disabled={props.disabled || false}
            onClick={props.onClick}
        >
            <span>{props.title}</span>
        </button>
    )
}
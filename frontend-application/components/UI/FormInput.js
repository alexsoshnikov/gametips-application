import classes from '../../styles/components/FormInput.module.scss'
import React from "react";

export const FormInput = React.forwardRef(
    ({ type, label, placeholder, onChange, required, register }, ref)  => {
    const cls = [classes.input]

    return (
        <div className={cls.join(' ')}>
            <input
                name={type}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                {...register(label, { required })}
            />
        </div>
    )
})
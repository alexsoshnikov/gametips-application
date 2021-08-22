import React, {useState} from 'react'

export const useForm = form => {
    const [values, setValues] = useState(form);
    const [errors, setErrors] = useState({});


    const handleChange = event => {
        const {name, value} = event.target
        setValues({...values, [name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        setErrors(validation(values))
        setValues(form)
    }

    return {handleChange, values, handleSubmit, errors}
}

const validation = values => {
    let errors = {}

    //emails validation
    if (values.email && values.email.trim()) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(values.email).toLowerCase())) {
            errors.email = 'Email is invalid'
        }
    } else {
        errors.email = 'Email is required!'
    }

    //password validation
    if (values.password) {
        if (values.password.length < 8) {
            errors.password = 'Password needs to be 8 character or more!'
        }
    } else {
        errors.password = 'Password is required!'
    }

    //username validation
    if (!values.username) {
        errors.username = 'Username is required!'
    }

    return errors
}



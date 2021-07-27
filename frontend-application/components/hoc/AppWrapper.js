import {useContext, useEffect} from 'react';
import {AuthContext} from "../../context/auth/context";

export function AppWrapper({ children }) {
    const {checkAuth} = useContext(AuthContext);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }
    }, []);

    return <>{children}</>
}


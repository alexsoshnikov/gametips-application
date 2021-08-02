import React, {useContext, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Feed} from "./pages/Feed";
import {Feedback} from "./pages/Feedback";
import {Registration} from "./pages/Registration";
import {Login} from "./pages/Login";
import {MajorNavbar} from "./components/Navbar/MajorNavbar";


const App: React.FC = () => {
    // const {authStore} = useContext(AuthContext)
    //
    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         authStore.checkAuth()
    //     }
    // }, [])

    return (
        <BrowserRouter>
            <MajorNavbar/>
            <Switch>
                <Route component={Feed} path="/" exact/>
                <Route component={Feedback} path="/feedback"/>
                <Route component={Registration} path="/auth/registration"/>
                <Route component={Login} path="/auth/login"/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
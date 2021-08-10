import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Feed} from "./pages/Feed";
import {Feedback} from "./pages/Feedback";
import {Registration} from "./pages/Registration";
import {Login} from "./pages/Login";
import {MajorNavbar} from "./components/Navbar/MajorNavbar";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {authActionCreator} from "./states";
import {RootState} from "./states/reducers";
import {Profile} from "./pages/Profile";
import {CreatePost} from "./pages/CreatePost";

const App: React.FC = () => {
    const state = useSelector((state: RootState) => state.auth)
    const {checkAuth, logout} = bindActionCreators(authActionCreator, useDispatch())

    const onClickHandler = () => {
        logout()
    }

    useEffect(() => {
        checkAuth()
    }, [])

    if (state.isLoading) {
        return <p>Loading...</p>
    }

    return (
        <BrowserRouter>
            <MajorNavbar
                email={state.response?.user?.email || "Profile"}
                isAuth={state.isAuth}
                id={state.response?.user?.id || ''}
                onClickHandler={onClickHandler}
            />
            <Switch>
                <Route component={Feedback} path="/feedback"/>
                <Route component={Registration} path="/auth/registration"/>
                <Route component={Login} path="/auth/login"/>
                <Route component={Profile} path="/profile/:id"/>
                <Route component={CreatePost} path="/post/create"/>
                <Route component={Feed} path="/" exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
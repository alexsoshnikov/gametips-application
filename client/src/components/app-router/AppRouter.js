import React from "react";
import {Route, Switch} from "react-router-dom";
import {Feedback} from "../../pages/feedback/Feedback";
import {Feed} from "../../pages/feed/Feed";
import {Login} from "../../pages/auth/login/Login";

export const AppRouter = () => {
    return (
        <Switch>
            <Route component={Feedback} path="/feedback"/>
            <Route component={Login} path="/auth/login"/>
            <Route component={Feed} path="/" exact/>
        </Switch>
    )
}
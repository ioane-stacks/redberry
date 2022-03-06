import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormPage from './FormPage';
import LangingPage from "./LangingPage";
const Langing = () => {

    return (
        <Router>
            <LangingPage />
            <Switch>
                <Route path="/FormPage">
                    <FormPage />
                </Route>
            </Switch>
        </Router>
    );
}


export default Langing;
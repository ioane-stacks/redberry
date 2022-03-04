import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormPage from './FormPage';
import LangingPage from "./LangingPage";
const Langing = () => {

    return (
        <Router>
            <Switch>
                <Route path="/FormPage">
                    <FormPage />
                </Route>
            </Switch>
            <LangingPage />
        </Router>
    );
}


export default Langing;
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormPage from './FormPage';
import LangingPage from "./LangingPage";
import SubmittedApplications from "./SubmittedApplications";
const Langing = () => {

    return (
        <Router>
            <LangingPage />
            <Switch>
                <Route exact path="/">
                    <LangingPage />
                </Route>
                <Route path="/FormPage">
                    <FormPage />
                </Route>
                <Route path="/SubmittedApplications">
                    <SubmittedApplications />
                </Route>
                <Route path="*">
                    {console.log('Nothing Found :(')}
                </Route>
            </Switch>
        </Router>
    );
}


export default Langing;
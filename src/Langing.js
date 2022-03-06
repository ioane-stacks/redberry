import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormPage from './FormPage';
import LangingPage from "./LangingPage";
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
                <Route path="/FormPage/:id" children={<FormPage />}></Route>
                <Route path="*">
                    <h2>No such Page</h2>
                </Route>
            </Switch>
        </Router>
    );
}


export default Langing;
import React from "react";
import { Link } from "react-router-dom";
import rocketman from './images/rocketman.png';


const LangingPage = ({ disp }) => {
    return (
        <div className="langing-page" style={{ display: disp }}>
            <h1>welcome rocketeer !</h1>
            <div className="lp-form">
                <Link className="btn circled" to="/FormPage">start questionaire</Link>
                <Link className="btn link" to="#">submitted applications</Link>
            </div>
            <img src={rocketman} alt="rocketman" className="rocketman" />
        </div>
    );
}

export default LangingPage;
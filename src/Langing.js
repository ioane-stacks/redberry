import React from "react";
import rocketman from './images/rocketman.png';

const Langing = () => {

    return (
        <div className="langing-page">
            <h1>welcome rocketeer !</h1>
            <div className="lp-form">
                <button className="btn">start questionaire</button>
                <a className="btn lnk" href="#">submitted applications</a>
            </div>
            <img src={rocketman} alt="rocketman" className="rocketman" />
        </div>
    );
}


export default Langing;
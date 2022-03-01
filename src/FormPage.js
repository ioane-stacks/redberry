import React from "react";
import PersonalInformation from "./form-contents/PersonalInformation";
import { data } from './data';
const FormPage = () => {

    return (
        <div className="container">
            <section className="questionaire">
                <div className="container-inner">
                    <h1>{data[0].quetionName}</h1>

                </div>
            </section>
            <section className="description">
            </section>
        </div>
    );
}

export default FormPage;
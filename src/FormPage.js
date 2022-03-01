import React, { useState } from "react";
import PersonalInformation from "./form-contents/PersonalInformation";
import { data } from './data';
const FormPage = () => {

    const [index, setIndex] = useState(0);
    const { id, questionName, descriptionName, description } = data[index];



    return (
        <div className="container">
            <section className="questionaire">
                <div className="container-inner">
                    <h1>{questionName}</h1>
                    <form action="">
                        <PersonalInformation />
                    </form>
                </div>
            </section>
            <section className="description">
            </section>
        </div>
    );
}

export default FormPage;
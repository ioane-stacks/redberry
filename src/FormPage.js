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
                <div className="container-inner">
                    <h1>{descriptionName}</h1>
                    <p>{description}</p>
                </div>
            </section>
        </div>
    );
}

export default FormPage;
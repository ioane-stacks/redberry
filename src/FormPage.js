import React, { useState } from "react";
import PersonalInformation from "./form-contents/PersonalInformation";
import { data } from './data';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
const FormPage = () => {
    const [index, setIndex] = useState(0);
    const { questionName, descriptionName, description } = data[index];



    return (
        <div className="container">
            <section className="questionaire">
                <div className="container-inner">
                    <h1>{questionName}</h1>
                    <form action="">
                        <PersonalInformation />
                    </form>
                    <div className="pagination">
                        <button className="btn-outline"><MdOutlineKeyboardArrowLeft /></button>
                        <button className="btn-fill"></button>
                        <button className="btn-fill" disabled></button>
                        <button className="btn-fill" disabled></button>
                        <button className="btn-fill" disabled></button>
                        <button className="btn-fill" disabled></button>
                        <button className="btn-outline"><MdOutlineKeyboardArrowRight /></button>
                    </div>
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
import React, { useState } from "react";
import PersonalInformation from "./form-contents/PersonalInformation";
import { data } from './data';
import { formData } from './formData';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import axios from "axios";
const FormPage = () => {
    const [index, setIndex] = useState(0);
    const { questionName, descriptionName, description } = data[index];

    const postData = async () => {
        axios.post('https://bootcamp-2022.devtest.ge/api/application', formData)
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        postData();

    }


    return (
        <div className="container">
            <section className="questionaire">
                <div className="container-inner">
                    <h1>{questionName}</h1>
                    <form className="form-app" onClick={submitHandler}>
                        <PersonalInformation />
                        <button type="submit" className="btn squared">Submit</button>
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
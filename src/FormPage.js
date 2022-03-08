import React, { useState } from "react";
//IMPORT FORM PAGES
import PersonalInformation from "./form-contents/PersonalInformation";
import TechnicalSkillSet from "./form-contents/TechnicalSkillSet";
import Covid from "./form-contents/Covid";

import { data } from './data';
import { formData } from './formData';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import axios from "axios";

const FormPage = () => {
    const [index, setIndex] = useState(1);
    const { questionName, descriptionName, description } = data[index - 1];

    //CONTENTS
    const [persInfo, setPersInfo] = useState(false);
    const [techInfo, setTechInfo] = useState(false);
    const [covid, setCovid] = useState(false);

    const postData = async () => {
        axios.post('https://bootcamp-2022.devtest.ge/api/application', formData, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Accept": "application/json",
            }
        })
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
    }


    const submitHandler = (e) => {
        e.preventDefault();
        // postData();
    }

    const changeBullets = (indx) => {
        return index === indx ? 'btn-fill' : 'btn-fill dis';
    }

    const nextPage = () => {
        switch (index) {
            case 1:
                setIndex(persInfo ? index + 1 : index);
                break;
            case 2:
                setIndex(techInfo ? index + 1 : index);
                break;
            case 3:
                setIndex(techInfo ? index + 1 : index);
                break;
            case 4:
                break;
            case 5:
                break;
        }
    }
    const prevPage = () => {
        setIndex(index === 1 ? 1 : index - 1);
    }

    return (
        <div className="container">
            <section className="questionaire">
                <div className="container-inner">
                    <h1>{questionName}</h1>
                    <form className="form-app" method="POST" onSubmit={submitHandler}>
                        {index === 1 && <PersonalInformation setPersInfo={setPersInfo} />}
                        {(persInfo && index === 2) && <TechnicalSkillSet setTechInfo={setTechInfo} />}
                        {(techInfo && persInfo && index === 3) && <Covid setCovid={setCovid} />}
                    </form>
                    <div className="pagination">
                        <button className="btn-outline" onClick={prevPage}><MdOutlineKeyboardArrowLeft /></button>
                        <button onClick={() => setIndex(1)} className={changeBullets(1)}></button>
                        <button onClick={() => setIndex(2)} className={changeBullets(2)} disabled={persInfo ? '' : 'disabled'}></button>
                        <button onClick={() => setIndex(3)} className={changeBullets(3)} disabled={persInfo && techInfo ? '' : 'disabled'}></button>
                        <button onClick={() => setIndex(4)} className={changeBullets(4)} disabled={persInfo && techInfo && covid ? '' : 'disabled'}></button>
                        <button onClick={() => setIndex(5)} className={changeBullets(5)}></button>
                        <button className="btn-outline" onClick={nextPage}><MdOutlineKeyboardArrowRight /></button>
                    </div>
                </div>
            </section >
            <section className="description">
                <div className="container-inner">
                    <h1>{descriptionName}</h1>
                    <p>{description}</p>
                </div>
            </section>
        </div >
    );
}

export default FormPage;
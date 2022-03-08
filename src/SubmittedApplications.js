import React, { useState, useEffect, useCallback } from "react";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const SubmittedApplications = () => {
    const [data, setData] = useState([]);
    const [skillData, setSkillData] = useState([]);
    const [drp, setDrp] = useState(false);

    const url = 'https://bootcamp-2022.devtest.ge/api/applications?token=f94782b5-b2fd-4367-944b-a2e91667fc0a';
    const url2 = 'https://bootcamp-2022.devtest.ge/api/skills';

    const fetchData = useCallback(async () => {
        const response = await fetch(url);
        if (response.status >= 200 && response.status <= 299) {
            const app = await response.json();
            setData(app);
        }
    }, []);

    const fetchSkills = useCallback(async () => {
        const response = await fetch(url2);
        if (response.status >= 200 && response.status <= 299) {
            const data = await response.json();
            setSkillData(data)
        }
    }, []);

    const dropDown = (dropId) => {
        const drop = document.getElementById(`drop${dropId}`);
        const dropD = document.getElementById(`dropD${dropId}`);
        const arr = document.getElementById(`arr${dropId}`);
        drop.classList.toggle('d-grid');
        dropD.classList.toggle('mt-2');
        dropD.classList.toggle('bg-light');
        arr.classList.toggle('arrow-up');
    }

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        fetchSkills();
    }, [fetchSkills]);

    return (
        <div className="submittedApp">
            <div className="subApp-container">
                <h1 className="mt-5 mb-3" style={{ marginLeft: '20px' }}>Submitted Applications</h1>
                {data.map((app, index) => {
                    const { first_name, last_name, email, phone, skills, work_preference,
                        had_covid, had_covid_at, vaccinated, vaccinated_at, will_organize_devtalk, devtalk_topic, something_special } = app;
                    return (
                        <article key={index}>
                            <div id={`dropD${index}`} className="subApp-dropDown mt-1" onClick={() => dropDown(index)}>
                                <span>{index + 1}</span>
                                <span className="sign dropdown"><MdOutlineKeyboardArrowLeft id={`arr${index}`} /></span>
                            </div>
                            <div id={`drop${index}`} className="inform">
                                <div className="infoBlock">
                                    <h4>Personal Information</h4>
                                    <div className="infoGrid-1 mt-5">
                                        <p>First Name</p>
                                        <p className="c-gray">{first_name}</p>
                                        <p>Last Name</p>
                                        <p className="c-gray">{last_name}</p>
                                        <p>E Mail</p>
                                        <p className="c-gray">{email}</p>
                                        <p>Phone</p>
                                        <p className="c-gray">{phone}</p>
                                    </div>
                                </div>
                                <div className="infoBlock">
                                    <h4>Skillset</h4>
                                    <div className="infoGrid-1 mt-5">
                                        {skills.map((skill, indx) => {
                                            return (
                                                <React.Fragment key={indx}>
                                                    <p>{skillData.length && skillData.filter(x => x.id === skill.id)[0].title}</p>
                                                    <p className="c-grey">Years of Experience: {skill.experience}</p>
                                                </React.Fragment>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default SubmittedApplications;
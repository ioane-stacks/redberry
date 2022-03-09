import React, { useState, useEffect, useCallback } from "react";
import { tempData } from "../tempData";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { BsDash } from 'react-icons/bs'
import { useFetch } from "../useFetch";

const TechnicalSkillSet = ({ setTechInfo }) => {
    const [skills, setSkills] = useState(['111']);
    const [skill, setSkill] = useState(0);
    const [toggle, setToggle] = useState(false);

    const [experience, setExperience] = useState('');
    const url = 'https://bootcamp-2022.devtest.ge/api/skills';

    const { appData } = useFetch(url);
    useEffect(() => {
        setSkills(appData);
    }, [url, appData, skills]);

    const removeSelectedItem = (name) => {
        const newItem = tempData.skills.filter(x => x.itemName !== name);
        const updateSkills = tempData.skills.filter(x => x.itemName === name);
        setSkills([...skills, { id: updateSkills[0].id, title: updateSkills[0].itemName }].filter(x => x.id !== tempData.skills.filter(u => u.id == x.id).map(u => u.id)[0]));
        tempData.skills = tempData.skills.filter(x => x.id !== updateSkills[0].id);
        tempData.skills = newItem;
    }


    const addExp = (e) => {
        e.preventDefault();
        if (skill > 0 && experience > 0) {
            tempData.skills.push({
                id: skill,
                experience: Number(experience),
                itemName: skills.find(x => x.id === skill).title,
                itemExperience: Number(experience)
            });
            setSkills(skills.filter(x => x.id !== skill));
            setSkill(0);
            setExperience('');
        }
    }


    const checkValidation = () => {
        if (tempData.skills.length >= 1 || tempData.skills.length > 0) {
            setTechInfo(true);
        } else {
            setTechInfo(false);
        }
    }

    useEffect(() => {
        checkValidation();
    }, [checkValidation]);

    const DropdownToggle = () => {
        const newData = skills.filter(x => x.id !== tempData.skills.filter(u => u.id == x.id).map(u => u.id)[0]);
        return (
            <ul>
                {skills.length && newData.map((data) => {
                    const { id, title } = data;
                    return <li key={id} onClick={() => { setSkill(id); setToggle(false) }}>{title}</li>
                })}
            </ul>
        );
    }

    const ShowAddedItems = () => {
        return (
            tempData.skills.map((data, i) => {
                const { itemName, itemExperience } = data;
                return <div className="selected mb-1" key={i}>
                    <span>{itemName}</span>
                    <span>Years of Experience: {itemExperience}</span>
                    <button className="sign remove" onClick={() => removeSelectedItem(itemName)}><BsDash /></button>
                </div>
            })
        );
    }


    return (
        <section>
            <div className="select" onClick={() => setToggle(!toggle)}>
                <span>{skill > 0 ? skills.find(x => x.id === skill).title : 'Skills'}</span>
                <span className="sign dropdown"><MdOutlineKeyboardArrowLeft /></span>
            </div>
            {toggle && <DropdownToggle />}
            <input type="number" min="0" className="mt-2" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder='Experience Duration in Years' />
            <button className="btn squared mb-3" onClick={addExp}>Add a Programming Language</button>
            {skills.length && <ShowAddedItems />}
        </section>
    );
}

export default TechnicalSkillSet;
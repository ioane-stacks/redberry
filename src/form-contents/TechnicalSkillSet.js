import React, { useState, useEffect, useCallback } from "react";
import { formData } from "../formData";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { BsDash } from 'react-icons/bs'

const TechnicalSkillSet = ({ setTechInfo }) => {
    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState(0);
    const [toggle, setToggle] = useState(false);

    const [experience, setExperience] = useState('');
    const url = 'https://bootcamp-2022.devtest.ge/api/skills';

    const [items, setItems] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await fetch(url);
        if (response.status >= 200 && response.status <= 299) {
            const data = await response.json();
            setSkills(data);
        }
    }, []);

    const removeSelectedItem = (name) => {
        const newItem = items.filter(x => x.itemName !== name);
        const updateSkills = items.filter(x => x.itemName === name);
        setSkills([...skills, { id: updateSkills[0].id, title: updateSkills[0].itemName }].sort());
        formData.skills = formData.skills.filter(x => x.id !== updateSkills[0].id);
        console.log(formData.skills);
        setItems(newItem);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const addExp = (e) => {
        e.preventDefault();
        if (skill > 0 && experience > 0) {
            const temp = {
                "id": skill,
                "experience": Number(experience)
            };
            formData.skills.push(temp);
            setItems([...items, {
                id: skill,
                experience: Number(experience),
                itemName: skills.find(x => x.id === skill).title,
                itemExperience: Number(experience)
            }]);
            setSkills(skills.filter(x => x.id !== skill));
            setSkill(0);
            setExperience('');
        }
    }


    const checkValidation = () => {
        if (items.length >= 1) {
            setTechInfo(true);
        } else {
            setTechInfo(false);
        }
    }


    useEffect(() => {
        checkValidation();
    }, []);

    const DropdownToggle = () => {
        return (
            <ul>
                {skills.map((data) => {
                    const { id, title } = data;
                    return <li key={id} onClick={() => { setSkill(id); setToggle(false) }}>{title}</li>
                })}
            </ul>
        );

    }

    const ShowAddedItems = () => {
        return (
            items.map((data, i) => {
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
        <>
            <div className="select" onClick={() => setToggle(!toggle)}>
                <span>{skill > 0 ? skills.find(x => x.id === skill).title : 'Skills'}</span>
                <span className="sign dropdown"><MdOutlineKeyboardArrowLeft /></span>
            </div>
            {toggle && <DropdownToggle />}
            <input type="number" className="mt-2" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder='Experience Duration in Years' required />
            <button className="btn squared mb-3" onClick={addExp}>Add a Programming Language</button>
            {formData.skills.length > 0 && <ShowAddedItems />}
        </>
    );
}

export default TechnicalSkillSet;
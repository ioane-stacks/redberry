import React, { useState, useEffect, useCallback } from "react";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const SubmittedApplications = () => {
    const [data, setData] = useState([]);
    const [drp, setDrp] = useState(false);

    const url = 'https://bootcamp-2022.devtest.ge/api/applications?token=0c8c8116-ecfc-4222-a4a4-9091e675f8d9';

    const fetchData = useCallback(async () => {
        const response = await fetch(url);
        if (response.status >= 200 && response.status <= 299) {
            const app = await response.json();
            setData(app);
        }
        console.log(data);
    }, []);

    const dropDown = (dropId) => {
        const d = document.getElementById(`drop${dropId}`);
        d.classList.toggle('d-block');
    }

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className="submittedApp">
            <div className="subApp-container">
                <h1 className="mt-5 mb-3" style={{ marginLeft: '20px' }}>Submitted Applications</h1>
                {data.map((app, index) => {
                    return (
                        <article key={index}>
                            <div className="subApp-dropDown mt-1" onClick={() => dropDown(index)}>
                                <span>{index + 1}</span>
                                <span className="sign dropdown"><MdOutlineKeyboardArrowLeft /></span>
                            </div>
                            <div id={`drop${index}`} className="inform">

                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default SubmittedApplications;
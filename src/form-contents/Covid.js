import React, { useEffect, useState } from "react";
import { tempData } from '../tempData';

const Covid = ({ setCovid }) => {
    const [preferWork, setPreferWork] = useState(tempData.work_preference);
    const [contactCovid, setContactCovid] = useState(tempData.had_covid);
    const [contactDate, setContactDate] = useState(tempData.had_covid_at);
    const [vaccinated, setVaccinated] = useState(tempData.vaccinated);
    const [vaccinatedDate, setVaccinatedDate] = useState(tempData.vaccinated_at);

    const localTime = () => { return new Date().toLocaleDateString('en-GB').split('/').reverse().join('-') }

    const validateCovidForm = () => {
        setContactDate(contactCovid === 'false' ? 'NAN' : contactDate);
        setVaccinatedDate(vaccinated === 'false' ? 'NAN' : vaccinatedDate);

        if (preferWork.length && contactCovid.length && vaccinated.length && contactDate.length && vaccinatedDate.length) {
            tempData.had_covid_at = contactDate;
            tempData.vaccinated_at = contactDate;
            tempData.work_preference = preferWork;
            tempData.had_covid = contactCovid;
            tempData.vaccinated = contactCovid;
            setCovid(true);
        } else {
            setCovid(false);
        }
    }

    useEffect(() => {
        isChecked();
        validateCovidForm();
    }, [validateCovidForm]);

    const isChecked = () => {
        //checklist 1
        const fso = document.getElementById('from_sairme');
        const fromHome = document.getElementById('from_home');
        const hybrid = document.getElementById('hybrid');

        fso.checked = fso.value === preferWork ? true : false;
        fromHome.checked = fromHome.value === preferWork ? true : false;
        hybrid.checked = hybrid.value === preferWork ? true : false;

        //checklist 2
        const hadCovid = document.getElementById('hadCovid')
        const hadNotCovid = document.getElementById('hadNotCov');

        hadCovid.checked = hadCovid.value === contactCovid ? true : false;
        hadNotCovid.checked = hadNotCovid.value === contactCovid ? true : false;


        //checklist 3
        const vacinated = document.getElementById('Vaccinated')
        const notVaccinated = document.getElementById('NotVaccinated');

        vacinated.checked = vacinated.value === vaccinated ? true : false;
        notVaccinated.checked = notVaccinated.value === vaccinated ? true : false;

    }

    return (
        <section>
            <div className="checking-form">
                <h2>how would you prefer to work?</h2>
                <div className="checking-grid mt-1 mb-4">
                    <input type="radio" id="from_sairme" name="prefer_work" value="from_office" onChange={e => setPreferWork(e.target.value)} />
                    <label htmlFor="from_sairme">From Sairme Office</label>

                    <input type="radio" id="from_home" name="prefer_work" value="from_home" onChange={e => setPreferWork(e.target.value)} />
                    <label htmlFor="from_home">From Home</label>

                    <input type="radio" id="hybrid" name="prefer_work" value="hybrid" onChange={e => setPreferWork(e.target.value)} />
                    <label htmlFor="hybrid">Hybrid</label>
                </div>

                <h2>Did you contact covid 19? :(</h2>
                <div className="checking-grid mt-1 mb-4">
                    <input type="radio" id="hadCovid" name="contact_covid" value={true} onChange={e => setContactCovid(e.target.value)} />
                    <label htmlFor="hadCovid">Yes</label>

                    <input type="radio" id="hadNotCov" name="contact_covid" value={false} onChange={e => setContactCovid(e.target.value)} />
                    <label htmlFor="hadNotCov">No</label>
                </div>

                {contactCovid === 'true' && <>
                    <h2>When?</h2>
                    <input type="date" min="2019-12-1" value={contactDate} max={localTime()} onChange={e => setContactDate(e.target.value)} className="mt-2 mb-6" />
                </>}

                <h2>Have you been vaccinated?</h2>
                <div className="checking-grid mt-1 mb-4">
                    <input type="radio" id="Vaccinated" name="vaccinated" value={true} onChange={e => setVaccinated(e.target.value)} />
                    <label htmlFor="Vaccinated">Yes</label>

                    <input type="radio" id="NotVaccinated" name="vaccinated" value={false} onChange={e => setVaccinated(e.target.value)} />
                    <label htmlFor="NotVaccinated">No</label>
                </div>

                {vaccinated === 'true' && <>
                    <h2>When did you get your last covid vaccine?</h2>
                    <input
                        type="date" min="2019-12-1" value={vaccinatedDate} max={localTime()} onChange={e => setVaccinatedDate(e.target.value)} className="mt-2 mb-6" />
                </>}
            </div>
        </section >
    )
}

export default Covid;
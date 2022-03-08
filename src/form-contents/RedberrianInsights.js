import React, { useEffect, useState } from "react";
import { tempData } from "../tempData";

const RedberrianInsights = ({ setRedberrianInsights }) => {
    const [devTalks, setDevTalks] = useState(tempData.will_organize_devtalk);
    const [devTalkTopic, setDevTalkTopic] = useState(tempData.devtalk_topic);
    const [somethingSpecial, setSomethingSpecial] = useState(tempData.something_special);

    const validateRedberrInsights = () => {
        setDevTalkTopic(devTalks === 'false' ? 'NULL' : devTalkTopic);
        if ((devTalks === 'false' || devTalks === 'true' && devTalkTopic !== null) && somethingSpecial.length) {
            tempData.will_organize_devtalk = devTalks;
            tempData.devtalk_topic = devTalkTopic;
            tempData.something_special = somethingSpecial;
            setRedberrianInsights(true);
        } else {
            tempData.devtalk_topic = null;
            setRedberrianInsights(false);
        }
    }

    const isChecked = () => {
        const devtalk = document.getElementById('devtalks');
        const noDevtalk = document.getElementById('noDevtalks');

        devtalk.checked = devtalk.value === devTalks ? true : false;
        noDevtalk.checked = noDevtalk.value === devTalks ? true : false;
    }

    useEffect(() => {
        validateRedberrInsights()
        isChecked();
    }, [validateRedberrInsights]);

    return (
        <section>
            <div className="checking-form">
                <h2>Would you attend Devtalks and maybe also organize your own?</h2>
                <div className="checking-grid mt-1 mb-3">
                    <input type="radio" id="devtalks" name="devTalks" value={true} onChange={e => { setDevTalkTopic(null); return setDevTalks(e.target.value) }} />
                    <label htmlFor="devtalks">Yes</label>

                    <input type="radio" id="noDevtalks" name="devTalks" value={false} onChange={e => setDevTalks(e.target.value)} />
                    <label htmlFor="noDevtalks">No</label>
                </div>

                {devTalks === 'true' && <>
                    <div className="mb-3">
                        <h2>What would you speak about at Devtalk?</h2>
                        <textarea className="mt-2 h-2" value={devTalkTopic} placeholder="I would..." onChange={e => setDevTalkTopic(e.target.value)}></textarea>
                    </div>
                </>}

                <div className="mb-3">
                    <h2>Tell us something special</h2>
                    <textarea className="mt-2 h-1" value={somethingSpecial} placeholder="I..." onChange={e => setSomethingSpecial(e.target.value)}></textarea>
                </div>
            </div>
        </section>
    );
}

export default RedberrianInsights;